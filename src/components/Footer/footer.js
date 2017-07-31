import React, {Component} from 'react';
import cx from 'classnames';
import styles from './footer.css'; 

class Footer extends Component {

  render () {
    return <div className={cx(styles['outer'])}>
      <div className={cx(styles['suggestions'])}>
        Got any suggestions to make this service better ? &nbsp; 
        <a href='mailto:hello@aotd.co' target='_blank' rel="noopener noreferrer">
          <span className={cx(styles['suggestion-link'])}>
            shoot an email to hello@aotd.co 
          </span>
        </a>
      </div>
      <span className={cx(styles['love'])}>
        Crafted with
        <img draggable="false" className={cx(styles['emoji'])} alt="❤" src="https://s.w.org/images/core/emoji/2.3/svg/2764.svg"/>
      </span>
    </div> 
  }

}

export default Footer;
