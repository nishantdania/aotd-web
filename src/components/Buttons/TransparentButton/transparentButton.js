import React, {Component} from 'react';
import cx from 'classnames';
import styles from './transparentButton.css'; 
import { Link } from 'react-router-dom';

class TransparentButton extends Component {

  render () {
    const { text, link, action, className} = this.props;
    if(link) {
      return <Link to={link} className={cx(styles['button'], className)}>
        {text}
      </Link>
    }
    else {
      return <div onClick={action} className={cx(styles['button'], className)}>
        {text}
      </div>
    }     
  }
}

export default TransparentButton;
