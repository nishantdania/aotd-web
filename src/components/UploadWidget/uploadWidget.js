import React, {Component} from 'react';
import cx from 'classnames';
import styles from './uploadWidget.css'; 
import TransparentButton from '../Buttons/TransparentButton';

class UploadWidget extends Component {

  state = {
    file: null
  }

  handleChange = (e) => {
    var files = e.target.files;
    if(files.length > 0) {
      var file = files[0];
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

  render () {

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
              className={cx(styles['button'])} />
          </div>
        </div>
      : null}
    </div> 
  }
}

export default UploadWidget;
