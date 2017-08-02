import React, {Component} from 'react';
import cx from 'classnames';
import styles from './genericInput.css'; 
import { Link } from 'react-router-dom';

class GenericInput extends Component {

  render () {

    const { 
      label,
      placeholder,
      type,
      className,
      link,
      linkText,
      handleChange,
      errorMessage,
      hint,
    } = this.props;

    return <div className={cx(styles['outer'], className)}>
      {label ?
        <div className={cx(styles['label'])}>
          {label}
          {hint ? <span className={cx(styles['hint'])}>
            {`(${hint})`}
          </span>
          : null }
          { linkText && link 
            ? <Link to={link} className={cx(styles['link'])}>
                {linkText}
              </Link> 
          :null }
        </div>
      : null}
      <input 
        placeholder={placeholder}
        type={type || 'text'}
        className={cx(styles['input'], {[styles['errorInput']]: errorMessage})} 
        onChange={ handleChange }
      />
      <div
       className={cx(styles['error'], {[styles['showError']]: errorMessage})}>
        {errorMessage}
      </div>
    </div>
  }
}

export default GenericInput;
