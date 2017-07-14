import React, {Component} from 'react';
import cx from 'classnames';
import styles from './login.css'; 
import TransparentButton from '../Buttons/TransparentButton';
import { Link } from 'react-router-dom';
import GenericInput from '../Inputs/GenericInput';

class Login extends Component {

  login = () => {
    console.log('Login clicked !');
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
        />
      <GenericInput 
        label='Password'
        placeholder='********'
        type='password'
        linkText='Forgot?'
        link='/resetpassword'
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

export default Login;
