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
    invalid: {},
  }

  validate = () => {
    const {email, password} = this.state;
    var invalid = {};
    if(email.length == 0){
      invalid.email = 'Email is required';
    }
    if(password.length < 8){
      invalid.password = 'Password should be atleast 8 characters long';
    }
    this.setState({
      invalid: invalid
    });
    return Object.keys(invalid).length == 0;
  }

  login = () => {
    const {login} = this.props;
    const {email, password} = this.state;
    if(this.validate()) {
      login({
        email,
        password
      })
      .then(() => {
        var origin = window.location.origin;
        window.location = origin;
      })
      .catch()
    }
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
          errorMessage={invalid.email}
        />
      <GenericInput 
        label='Password'
        placeholder='********'
        type='password'
        linkText='Forgot?'
        link='/forgotpassword'
        handleChange={(e) => this.changeState({ password:  e.target.value })}
        errorMessage={invalid.password}
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
