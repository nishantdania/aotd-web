import React, {Component} from 'react';
import cx from 'classnames';
import styles from './uploadWidget.css'; 
import TransparentButton from '../Buttons/TransparentButton';
import * as toastActions from '../../actions/toastActions.js';
import * as profileActions from '../../actions/profileActions.js';
import { connect } from 'react-redux';

class UploadWidget extends Component {

  state = {
    file: null
  }

  showUploadWidget = () => {
    const { userState, profile } = this.props;
    const { isLoggedIn, user, isUploadPending } = userState;
    const { userDetails } = profile || {};
    if(!isLoggedIn || !userDetails.username || !isUploadPending) {
      return false;
    }
    var show = userDetails.username === user.username;
    return show;
  }

  handleChange = (e) => {
    var files = e.target.files;
    if(files.length > 0) {
      var file = files[0];
      if(!(/\.(jpg|jpeg|png)$/i).test(file.name)) {
        return this.props.showToastAction(
          'Only jpeg, jpg and png files allowed',
          3000
        );
      }
      if(file.size < 10) {
        return this.props.showToastAction(
          'Image too small',
          3000
        );
      }
      var preview = window.URL.createObjectURL(file);
      file.preview = preview;
      this.setState({
        file
      });
    }
  }

  changeFile = () => {
    this.setState({
      file: null
    });
  }

  uploadFile = () => {
    const {file} = this.state;
    const {uploadFile} = this.props;
    uploadFile(file);    
  }

  renderUploadWidget = () => {
    const {file} = this.state;
    return <div>
      {!file ?
        <div className={cx(styles['uploadWrapper'])}>
          <TransparentButton 
            text='Upload art'
            className={cx(styles['uploadButton'])} />
          <input 
            type='file'
            onChange={this.handleChange}
            accept='image/jpeg, image/jpg, image/png'
            className={cx(styles['uploadInput'])}
          />
        </div>
      : null}
      {file ?
        <div> 
          <img src={file.preview} className={cx(styles['preview'])} /> 
          <div className={cx(styles['actions'])}>
            <TransparentButton 
              text='Change'
              action={this.changeFile}
              className={cx(styles['button'])} />
            <TransparentButton 
              text='Upload'
              action={this.uploadFile}
              className={cx(styles['button'])} />
          </div>
        </div>
      : null}
    </div>
  }

  render () {

    if(this.showUploadWidget()) {
      return this.renderUploadWidget();
    }
    else {
      return null;
    }

 
  }
}

UploadWidget = connect(
  null,
  { ...toastActions,
  ...profileActions }
)(UploadWidget);

export default UploadWidget;
