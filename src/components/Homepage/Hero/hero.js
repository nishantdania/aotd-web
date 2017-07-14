import React, {Component} from 'react';
import cx from 'classnames';
import styles from './hero.css'; 
import TransparentButton from '../../Buttons/TransparentButton';

class Hero extends Component {

  render () {
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
          learn how it works
        </span>
      </div>
    </div>
  }
}

export default Hero;
