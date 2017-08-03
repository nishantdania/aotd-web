import React, {Component} from 'react';
import cx from 'classnames';
import styles from './solidButton.css'; 
import { Link, withRouter } from 'react-router-dom';

class SolidButton extends Component {

  handleKeyPress = (e) => {
    if(e.which === 13) {
      const { link, action, history } = this.props;
      if(action) {
        action();
      }
      else if(link) {
        history.push(link);
      }
    }
  }

  render () {

    const { text, link, action, className, asyncStatus } = this.props;


    if(link) {
      return <Link to={link} tabIndex='0' className={cx(styles['button'], className)}>
        {text}
      </Link>
    }
    else {
      return <div
        tabIndex='0'
        onClick={action}
        onKeyPress={this.handleKeyPress}
        className={cx(styles['button'], className)}>
          {text}
      </div>
    }     
  }
}

export default withRouter(SolidButton);
