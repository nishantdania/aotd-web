import React, {Component} from 'react';
import cx from 'classnames';
import styles from './resetPassword.css'; 
import TransparentButton from '../Buttons/TransparentButton';
import { Link } from 'react-router-dom';
import GenericInput from '../Inputs/GenericInput';
import qs from 'query-string';
import * as actions from '../../actions/accountActions.js';
import * as toastActions from '../../actions/toastActions.js';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import messages from '../../actions/messages.js';

class ResetPassword extends Component {

  state = {
    password: '',
    confirmPassword: '',
    invalid: {}
  }

  validate = () => {
    const { password, confirmPassword } = this.state;
    var invalid = {};
    if(password.length < 8){
      invalid.password = 'Password should be 8 chars or more';
    }
    if(confirmPassword !== password){
      invalid.confirmPassword = 'Passwords don\'t match';
    }
    this.setState({
      invalid: invalid
    });
    return Object.keys(invalid).length === 0;
  }


  resetPassword = () => {
    const { resetPassword, location } = this.props;
    const { password } = this.state;
    const query = qs.parse(location.search);
    const token = query.token;
    
    if(this.validate()) {
      resetPassword({
        password,
        token
      })
      .then((res) => {
          if(res.status === 200) {
            this.props.showToastAction(
              messages.RESET_PASSWORD_SUCCESS,
              3000
            );
            this.props.history.push('/login');
          }
          else {
            this.throwError();    
          }
      })
      .catch((err) => {
        this.throwError();    
      })
    }
  }

  throwError = () => {
    this.props.showToastAction(
      messages.RESET_PASSWORD_ERROR,
      3000
    );
    this.props.history.push('/forgotPassword');
  }

  changeState = (change) => {
    this.setState(
      ...this.state,
      change
    );
  }

  render () {

    const {invalid} = this.state; 

    return <div className={cx(styles['outer'])}>
      <Link to='/' className={cx(styles['logo'])} >
        <h1>#aotd</h1>
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
          errorMessage={invalid.password}
          hint='Minimum 8 chars long'
        />
        <GenericInput 
          label='Confirm new password'
          placeholder='********'
          type='password'
          handleChange={(e) => this.changeState({ confirmPassword:  e.target.value })}
          errorMessage={invalid.confirmPassword}
        />
      </form>
      <TransparentButton 
        text='Set new password' 
        action={this.resetPassword}
        className={cx(styles['button'])} />
    </div>
  }
}

ResetPassword = withRouter(connect(
  null,
  { ...actions, ...toastActions }
)(ResetPassword));


export default ResetPassword;
