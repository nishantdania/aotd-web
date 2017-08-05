import React, {Component} from 'react';
import cx from 'classnames';
import styles from './signup.css'; 
import TransparentButton from '../Buttons/TransparentButton';
import { Link } from 'react-router-dom';
import GenericInput from '../Inputs/GenericInput';
import * as actions from '../../actions/authActions.js';
import { connect } from 'react-redux';

class Signup extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    invalid: {},    
  }

  signup = () => {
    const {signup} = this.props;
    const {firstName, lastName, email, username} = this.state;
    if(this.validate()) {
      signup({
        firstName,
        lastName,
        email,
        username
      });
    }
  }

  changeState = (change) => {
    this.setState(
      ...this.state,
      change
    );
  }

  validate = () => {
    const {firstName, lastName, email, username} = this.state;
    var invalid = {};
    var re = /^[a-zA-Z0-9_.-]*$/;
    if(firstName.length === 0) {
      invalid.firstName = 'First name is required';
    }
    if(lastName.length === 0) {
      invalid.lastName = 'Last name is required';
    }
    if(username.length === 0) {
      invalid.username = 'Username is required';
    }
    if(username.length > 0 && !re.test(username)) {
      invalid.username = 'Username should be alphanumeric';
    }
    if(email.length === 0) {
      invalid.email = 'Email is required';
    }
    this.setState({
      invalid: invalid
    });
    return Object.keys(invalid).length === 0;
  }

  render () {

    const { invalid } = this.state;
    const { status } = this.props;

    return <div className={cx(styles['outer'])}>
      <Link to='/' className={cx(styles['logo'])} >
        <h1>#aotd</h1>
      </Link>
      <h2>
        Lets get started!
      </h2>
      <h3>
      </h3>
      <form>
        <GenericInput 
          label='Username'
          placeholder='johnsnow123'
          hint='Only letters and numbers are allowed'
          handleChange={(e) => this.changeState({ username:  e.target.value })}
          errorMessage={invalid.username}
        />
        <GenericInput 
          label='First name'
          placeholder='John'
          handleChange={(e) => this.changeState({ firstName:  e.target.value })}
          errorMessage={invalid.firstName}
        />
        <GenericInput 
          label='Last name'
          placeholder='Snow'
          handleChange={(e) => this.changeState({ lastName: e.target.value })}
          errorMessage={invalid.lastName}
        />
        <GenericInput 
          label='Email'
          placeholder='your@email.com'
          handleChange={(e) => this.changeState({ email: e.target.value })}
          errorMessage={invalid.email}
        />
      </form>
      <TransparentButton 
        text='Sign up' 
        action={this.signup}
        status={status}
        className={cx(styles['button'])} />
      <div className={cx(styles['other'])}>
        Already have an account ? <span><Link to='/login' >Login</Link></span>
      </div>
      <div className={cx(styles['other'])}>
        Lost/expired verification email ? <span><Link to='/resendVerify' >Resend</Link></span>
      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.status.signup
  };
};

Signup = connect(
  mapStateToProps,
  actions
)(Signup);

export default Signup;
