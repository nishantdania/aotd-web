import React, {Component} from 'react';
import cx from 'classnames';
import styles from './uploadWidget.css'; 
import Dropzone from 'react-dropzone'
import TransparentButton from '../Buttons/TransparentButton';

class UploadWidget extends Component {

  state = {
    file: null
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    console.log('acceptedFiles: ', acceptedFiles); 
    if(acceptedFiles.length > 0) {
      this.setState({
        file: acceptedFiles[0]   
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
      {!file ? <Dropzone
          className={cx(styles['dropzone'])} 
          multiple={false}
          accept="image/jpg, image/png, image/jpeg"
          onDrop={this.onDrop} >
          <p>Drag and drop image here or <span>browse</span></p>
        </Dropzone>
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
