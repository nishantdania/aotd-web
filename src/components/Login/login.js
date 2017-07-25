import React, {Component} from 'react';
import cx from 'classnames';
import styles from './login.css'; 
import TransparentButton from '../Buttons/TransparentButton';
import { Link } from 'react-router-dom';
import GenericInput from '../Inputs/GenericInput';
import * as actions from '../../actions/authActions.js';
import { connect } from 'react-redux';

class Login extends Component {

  state = {
    email: '',
    password: '',
  }

  login = () => {
    const {login} = this.props;
    const {email, password} = this.state;
    login({
      email,
      password
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
        Welcome back!
      </h2>
      <h3>
        Please login to continue
      </h3>
      <form>
        <GenericInput 
          label='Email'
          placeholder='artist@email.com'
          handleChange={(e) => this.changeState({ email:  e.target.value })}
        />
      <GenericInput 
        label='Password'
        placeholder='********'
        type='password'
        linkText='Forgot?'
        link='/forgotpassword'
        handleChange={(e) => this.changeState({ password:  e.target.value })}
      /> 
      </form>
      <TransparentButton 
        text='Login' 
        action={this.login}
        className={cx(styles['button'])} />
      <div className={cx(styles['other'])}>
        Don{`'`}t have an account ? <span><Link to='/signup' >Sign up</Link></span>
      </div>
    </div>
  }
}

Login = connect(
  null,
  actions
)(Login);

export default Login;
