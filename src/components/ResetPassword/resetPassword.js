import React, {Component} from 'react';
import cx from 'classnames';
import styles from './resetPassword.css'; 
import TransparentButton from '../Buttons/TransparentButton';
import { Link } from 'react-router-dom';
import GenericInput from '../Inputs/GenericInput';
import qs from 'query-string';
import * as actions from '../../actions/accountActions.js';
import { connect } from 'react-redux';

class ResetPassword extends Component {

  state = {
    password: '',
    confirmPassword: '',
  }

  resetPassword = () => {
    const { resetPassword, location } = this.props;
    const { password, confirmPassword } = this.state;
    const query = qs.parse(location.search);
    const token = query.token;

    resetPassword({
      password,
      token
    });
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
          handleChange={(e) => this.changeState({ password:  e.target.value })}
        />
        <GenericInput 
          label='Confirm new password'
          placeholder='********'
          type='password'
          handleChange={(e) => this.changeState({ confirmPassword:  e.target.value })}
        />
      </form>
      <TransparentButton 
        text='Set new password' 
        action={this.resetPassword}
        className={cx(styles['button'])} />
    </div>
  }
}

ResetPassword = connect(
  null,
  actions
)(ResetPassword);


export default ResetPassword;
