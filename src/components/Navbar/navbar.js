import React, {Component} from 'react';
import cx from 'classnames';
import styles from './navbar.css'; 
import TransparentButton from '../Buttons/TransparentButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SCROLL_STICKY = 0;

class Navbar extends Component {

  state = {
    sticky: false
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    var scroll = document.body.scrollTop;
    if(scroll > SCROLL_STICKY && !this.state.sticky) {
      this.setState({
        sticky: true
      });     
    }
    else if(scroll <= SCROLL_STICKY && this.state.sticky) {
      this.setState({
        sticky: false 
      });
    }
  }

  renderNavbar = () => {

    const { isLoggedIn, user } = this.props.userState;
    const { username } = user || {};

    return <nav className={cx(styles['nav'])}>
      <Link to='/' className={cx(styles['logo'])}>
        #aotd
      </Link>
      <div className={cx(styles['links'])}>
        <ul>
          <li>
            <Link to='/howitworks'>
              How it works
            </Link>
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

  render () {

    const { sticky } = this.state;

    return <div className={cx(styles['outer'])}>
      <div className={cx(styles['animate'], {[styles['sticky']]: sticky})}>
        {this.renderNavbar()}
      </div>  
    </div>

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
