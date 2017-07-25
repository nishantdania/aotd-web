import React, {Component} from 'react';
import { checkUserState } from '../../actions/authActions.js';
import { connect } from 'react-redux';

class Root extends Component {

  state = {
    loginCheckDone: false
  }

  componentWillMount () {
    this.isLoggedIn();
  }

  isLoggedIn = () => {

    const { checkUserState } = this.props;

    if (typeof localStorage !== 'undefined') {
      try {
        var token = localStorage.getItem('token');
        if (token) {
          checkUserState({token:token})
          .then(() => {
            this.markLoginCheckTrue();    
          })
        } 
        else {
          this.markLoginCheckTrue();    
        }
      } catch(e) {
        this.markLoginCheckTrue();    
        // localStorage is disabled
      }
    } 
  }

  markLoginCheckTrue = () => {
    this.setState({
      loginCheckDone: true
    });
  }

  render () {

    const { loginCheckDone } = this.state;
    return <div>
      {loginCheckDone ? this.props.children : null} 
    </div>
  }
}

Root = connect(
  null,
  {
    checkUserState
  } 
)(Root);


export default Root;
