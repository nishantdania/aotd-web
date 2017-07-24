import React, {Component} from 'react';
import cx from 'classnames';
import styles from './toast.css'; 
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import { hideToastAction, showToastAction } from '../../actions/toastActions.js';

class Toast extends Component {

  componentWillMount () {
    this.props.showToastAction(
      'Welcome to Art of the day !',
      3000
    ); 
  }

  componentWillReceiveProps (nextProps) {
    const { timeout } = {...nextProps.toast};
    if(timeout && this.props.toast.timeout === null) {
      setTimeout(() => {
        this.props.hideToastAction();
      }, timeout);
    }
  }

  render () {

    const { show, message } = {...this.props.toast};

      return (
        <CSSTransitionGroup
          transitionName={{
            appear: styles['toast-appear'],
            appearActive: styles['toast-appear-active'],
            enter: styles['toast-appear'],
            enterActive: styles['toast-appear-active'],
            leave: styles['toast-leave'],
            leaveActive: styles['toast-leave-active']
          }}
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={true}
          transitionEnterTimeout={1000}
          transitionLeave={true}
          transitionLeaveTimeout={500}>
            { show ?
            <div className={cx(styles['outer'])}>
              <div className={cx(styles['content'])}>
                {message}
              </div>
            </div>
            : null }
        </CSSTransitionGroup>
      )
     
  }
}

const mapStateToProps = (state) => {
  return {
    toast: state.toast
  }
}

Toast = connect(
  mapStateToProps,
  {
    hideToastAction,
    showToastAction
  }
)(Toast);

export default Toast;
