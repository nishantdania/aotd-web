import {Component} from 'react';
import cx from 'classnames';
import styles from './verifyEmail.css'; 
import qs from 'query-string';
import * as actions from '../../actions/accountActions.js';
import * as toastActions from '../../actions/toastActions.js';
import messages from '../../actions/messages.js';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

class VerifyEmail extends Component {

  componentDidMount () {
    const { location } = this.props;
    const query = qs.parse(location.search);
    const token = query.token;
    if(token) {
      this.verifyEmail({token: token});
    }
    else {
      this.props.showToastAction(
        messages.VERIFY_EMAIL_TOKEN_MISSING,
        3000
      );
      this.props.history.push('/');    
    }
  }

  verifyEmail = (data) => {
    const { verifyEmail } = this.props;
    verifyEmail(data)
    .then((res) => {
      if(res.data && res.data.token) {
        this.props.showToastAction(
          messages.VERIFY_EMAIL_SUCCESS,
          3000
        );
        var redirectURL = '/resetPassword?token=' + res.data.token;
        this.props.history.push(redirectURL);    
      } 
    })
    .catch((err) => {
      this.props.showToastAction(
        messages.VERIFY_EMAIL_ERROR,
        3000
      );
      this.props.history.push('/');    
    })
  }

  render () {
    return null; 
  }

}

VerifyEmail= withRouter(connect(
  null,
  {...actions, ...toastActions}
)(VerifyEmail));


export default VerifyEmail;
