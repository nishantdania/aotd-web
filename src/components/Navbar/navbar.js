import React, {Component} from 'react';
import cx from 'classnames';
import styles from './navbar.css'; 
import TransparentButton from '../Buttons/TransparentButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

  render () {

    const { isLoggedIn, user } = this.props.userState;
    const { username } = user || {};

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
        { isLoggedIn 
        ?
        <ul>
          <li>
            <Link to={`/@${username}`}>
              <img alt='profile' 
                src='./assets/profile_icon.svg'
              />
            </Link>
          </li>
        </ul>
        : 
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <TransparentButton text='Sign Up' link='/signup'/>
          </li>
        </ul>
        }
      </div>
    </nav>
  }
}

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};

Navbar = connect(
  mapStateToProps,
  null 
)(Navbar);

export default Navbar;
