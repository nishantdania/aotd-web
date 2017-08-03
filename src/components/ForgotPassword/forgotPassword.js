import React, {Component} from 'react';
import cx from 'classnames';
import styles from './forgotPassword.css'; 
import TransparentButton from '../Buttons/TransparentButton';
import { Link } from 'react-router-dom';
import GenericInput from '../Inputs/GenericInput';
import * as actions from '../../actions/accountActions.js';
import { connect } from 'react-redux';

class ForgotPassword extends Component {

  state = {
    email: ''
  }

  sendEmail = () => {
    this.props.resetPasswordRequest({email: this.state.email});
  }

  changeState = (change) => {
    this.setState(
      ...this.state,
      change
    );
  }

  render () {
    return <div className={cx(styles['outer'])}>
      <Link to='/' className={cx(styles['logo'])} >
        <h1>#aotd</h1>
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
          handleChange={(e) => this.changeState({ email:  e.target.value })}
        />
      </form>
      <TransparentButton 
        text='Send instructions' 
        action={this.sendEmail}
        className={cx(styles['button'])} />
    </div>
  }
}

ForgotPassword = connect(
  null,
  actions
)(ForgotPassword);

export default ForgotPassword;
