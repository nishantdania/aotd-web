import React, {Component} from 'react';
import cx from 'classnames';
import styles from './profileSettingsWidget.css'; 
import TransparentButton from '../Buttons/TransparentButton';
import * as actions from '../../actions/profileActions.js';
import * as toastActions from '../../actions/toastActions.js';
import { connect } from 'react-redux';

class ProfileSettingsWidget extends Component {

  state = {
    openMenu: false
  }

  openMenu = () => {
    this.setState({
      openMenu: !this.state.openMenu 
    });
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    window.location = window.location.origin;
    this.openMenu();
  }

  handleAvatarChange = (e) => {
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
      this.props.changeAvatar(file);
      this.openMenu();
    }
  }

  render () {

    const { openMenu } = this.state;
    const { className } = this.props;

    return <div className={cx(styles['outer'], className)}>
        <TransparentButton 
          text='...' 
          action={this.openMenu}
          className={cx(styles['button'])} />
        {openMenu ? 
        <div>
          <div className={cx(styles['overlay'])} onClick={this.openMenu}/>
            <div className={cx(styles['links-wrapper'])}>
              <ul className={cx(styles['links'])}>
                <li>
                  Change avatar
                  <input 
                    type='file'
                    onChange={this.handleAvatarChange}
                    accept='image/jpeg, image/jpg, image/png'
                    className={cx(styles['uploadInput'])}
                  />
                </li>
                <li onClick={this.handleLogout} >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        : null}
    </div>
  }
}

ProfileSettingsWidget = connect(
  null,
  {...actions, ...toastActions}
)(ProfileSettingsWidget);

export default ProfileSettingsWidget;
