import React, {Component} from 'react';
import cx from 'classnames';
import styles from './forgotPassword.css'; 
import TransparentButton from '../Buttons/TransparentButton';
import { Link } from 'react-router-dom';
import GenericInput from '../Inputs/GenericInput';

class ForgotPassword extends Component {

  sendEmail = () => {
    console.log('Send forgot password email!');
  }

  render () {
    return <div className={cx(styles['outer'])}>
      <Link to='/' className={cx(styles['logo'])} >
        <h1>Art of the day</h1>
      </Link>
      <h2>
        Forgot your password ?
      </h2>
      <h3>
        Enter your email and we{`'`}ll send you the reset instructions
      </h3>
      <form>
        <GenericInput 
          label='Email'
          placeholder='artist@email.com'
        />
      </form>
      <TransparentButton 
        text='Send instructions' 
        action={this.sendEmail}
        className={cx(styles['button'])} />
    </div>
  }
}

export default ForgotPassword;
