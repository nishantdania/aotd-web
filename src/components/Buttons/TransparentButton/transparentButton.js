import React, {Component} from 'react';
import cx from 'classnames';
import styles from './transparentButton.css'; 
import { Link, withRouter } from 'react-router-dom';
import { isLoading } from '../../../utils/asyncStatusHelper.js';

class TransparentButton extends Component {

  handleKeyPress = (e) => {
    const { link, action, status, history } = this.props;
    if(isLoading(status)) {
      return;
    }
    if(e.which === 13) {
      if(action) {
        action();
      }
      else if(link) {
        history.push(link);
      }
    }
  }

  handleClick = () => {
    const { status, action } = this.props;
    if(isLoading(status)) {
      return;
    }
    action();
  }

  render () {

    const { text, link, action, className, status } = this.props;

    if(link) {
      return <Link to={link} tabIndex='0' className={cx(styles['button'], className)}>
        {text}
      </Link>
    }
    else {
      return <div
        tabIndex='0'
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        className={cx(styles['button'], className, {[styles['loading']]: isLoading(status)})}>
          {isLoading(status) 
          ? 
            <img alt='' src='/assets/spinner.svg'/>
          : 
          text }
      </div>
    }     
  }
}

export default withRouter(TransparentButton);
