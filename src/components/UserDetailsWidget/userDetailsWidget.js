import React, {Component} from 'react';
import cx from 'classnames';
import styles from './userDetailsWidget.css'; 

class UserDetailsWidget extends Component {

  renderPlaceholder = () => {
    return <div className={cx(styles['outer'])}>
      <div className={cx(styles['avatar'], styles['filled'])}></div>
      <div className={cx(styles['name'], styles['filled'], styles['animation'])}></div>
      <div className={cx(styles['username'], styles['filled'], styles['animation'])}></div>
    </div>
  }

  renderData = (userDetails) => {
    const {
      firstName,
      lastName,
      username,
      avatarURL
    } = userDetails || {};

    return <div className={cx(styles['outer'])}>
      <div className={cx(styles['avatar'])}>
        <img alt='avatar' src={avatarURL}/>
      </div>
      <div className={cx(styles['name'])}>
        {`${firstName} ${lastName}`}
      </div>
      <div className={cx(styles['username'])}>
        {`@${username}`}
      </div>
    </div>

  }

  render () {

    const { userDetails } = this.props;

    if(!userDetails) {
      return this.renderPlaceholder();
    }
    else {
      return this.renderData(userDetails);
    }
    
  }
}

export default UserDetailsWidget;
