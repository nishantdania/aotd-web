import React, {Component} from 'react';
import cx from 'classnames';
import styles from './hero.css'; 
import TransparentButton from '../../Buttons/TransparentButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Hero extends Component {

  renderGeneric = () => {
    return <div className={cx(styles['outer'])}> 
      <div className={cx(styles['upper'])}>
        <h1>
          Art of the day
        </h1>
        <h2>
          Draw daily. Upload art. Improve as an artist
        </h2>
        <h2>
          Join the community to form a habit of drawing.
        </h2>
      </div>
      <div>
        <span>
          <TransparentButton text='Get Started' link='/signup'/>
        </span>
        <span className={cx(styles['or'])}>
          or
        </span>
        <span className={cx(styles['link'])}>
          <Link to='/howitworks'>
            learn how it works
          </Link>
        </span>
      </div>
    </div>
  }

  renderSpecific = () => {
    const { userState } = this.props;
    const { user } = userState;
    const { firstName, username } = user;

    return <div className={cx(styles['outer'])}> 
      <div className={cx(styles['upper'])}>
        <h1>
          Welcome back {firstName}!
        </h1>
      </div>
      <div>
        <span>
          <TransparentButton text='Visit Profile' link={`/@${username}`}/>
        </span>
      </div>
    </div>
  }

  render () {
  
    const { userState } = this.props;
    const { isLoggedIn } = userState;
    
    return isLoggedIn ? this.renderSpecific() : this.renderGeneric()
  }
}

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};

Hero = connect(
  mapStateToProps,
  null
)(Hero);


export default Hero;
