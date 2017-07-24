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
  }

  signup = () => {
    const {signup} = this.props;
    const {firstName, lastName, email} = this.state;
    signup({
      firstName,
      lastName,
      email
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
        Lets get started!
      </h2>
      <h3>
      </h3>
      <form>
        <GenericInput 
          label='First name'
          placeholder='John'
          handleChange={(e) => this.changeState({ firstName:  e.target.value })}
        />
        <GenericInput 
          label='Last name'
          placeholder='Snow'
          handleChange={(e) => this.changeState({ lastName: e.target.value })}
        />
        <GenericInput 
          label='Email'
          placeholder='your@email.com'
          handleChange={(e) => this.changeState({ email: e.target.value })}
        />
      </form>
      <TransparentButton 
        text='Sign up' 
        action={this.signup}
        className={cx(styles['button'])} />
      <div className={cx(styles['other'])}>
        Already have an account ? <span><Link to='/login' >Login</Link></span>
      </div>
    </div>
  }
}

Signup = connect(
  null,
  actions
)(Signup);

export default Signup;
