import React, {Component} from 'react';
import cx from 'classnames';
import styles from './resendVerify.css'; 
import TransparentButton from '../Buttons/TransparentButton';
import { Link } from 'react-router-dom';
import GenericInput from '../Inputs/GenericInput';
import * as actions from '../../actions/accountActions.js';
import { connect } from 'react-redux';

class ResendVerify extends Component {

  state = {
    email: ''
  }

  sendEmail = () => {
    this.props.resendVerifyRequest({email: this.state.email});
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
        Resend account verification mail
      </h2>
      <h3>
        Enter your email and we{`'`}ll send you the link to verify your account
      </h3>
      <form>
        <GenericInput 
          label='Email'
          placeholder='artist@email.com'
          handleChange={(e) => this.changeState({ email:  e.target.value })}
        />
      </form>
      <TransparentButton 
        text='Resend verification mail' 
        action={this.sendEmail}
        className={cx(styles['button'])} />
    </div>
  }
}

ResendVerify = connect(
  null,
  actions
)(ResendVerify);

export default ResendVerify;
