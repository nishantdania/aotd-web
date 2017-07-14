import React, {Component} from 'react';
import cx from 'classnames';
import styles from './resetPassword.css'; 
import TransparentButton from '../Buttons/TransparentButton';
import { Link } from 'react-router-dom';
import GenericInput from '../Inputs/GenericInput';

class ResetPassword extends Component {

  sendEmail = () => {
    console.log('Send reset password email!');
  }

  render () {
    return <div className={cx(styles['outer'])}>
      <Link to='/' className={cx(styles['logo'])} >
        <h1>Art of the day</h1>
      </Link>
      <h2>
        Enter new password
      </h2>
      <form>
        <GenericInput 
          label='New password'
          placeholder='********'
          type='password'
        />
        <GenericInput 
          label='Confirm new password'
          placeholder='********'
          type='password'
        />
      </form>
      <TransparentButton 
        text='Set new Password' 
        action={this.sendEmail}
        className={cx(styles['button'])} />
    </div>
  }
}

export default ResetPassword;
