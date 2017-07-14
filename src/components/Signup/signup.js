import React, {Component} from 'react';
import cx from 'classnames';
import styles from './signup.css'; 
import TransparentButton from '../Buttons/TransparentButton';
import { Link } from 'react-router-dom';
import GenericInput from '../Inputs/GenericInput';

class Signup extends Component {

  signup = () => {
    console.log('Signup clicked !');
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
        />
        <GenericInput 
          label='Last name'
          placeholder='Snow'
        />
        <GenericInput 
          label='Email'
          placeholder='your@email.com'
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

export default Signup;
