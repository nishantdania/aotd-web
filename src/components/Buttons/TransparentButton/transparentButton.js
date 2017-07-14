import React, {Component} from 'react';
import cx from 'classnames';
import styles from './transparentButton.css'; 
import { Link } from 'react-router-dom';

class TransparentButton extends Component {

  render () {
    const { text, link } = this.props;
    return <Link to={link} className={cx(styles['button'])}>
      {text}
    </Link> 
  }
}

export default TransparentButton;
