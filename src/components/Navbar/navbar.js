import React, {Component} from 'react';
import cx from 'classnames';
import styles from './navbar.css'; 
import TransparentButton from '../Buttons/TransparentButton';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render () {
    return <nav className={cx(styles['nav'])}>
      <Link to='/' className={cx(styles['logo'])}>
        #aotd
      </Link>
      <div className={cx(styles['links'])}>
        <ul>
          <li>
            How it works
          </li>
        </ul>
        <span className={cx(styles['pipe'])}>|</span>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <TransparentButton text='Sign Up' link='/signup'/>
          </li>
        </ul>
      </div>
    </nav>
  }
}

export default Navbar;
