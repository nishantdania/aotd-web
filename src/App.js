import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout  from './components/Layout';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Toast from './components/Toast';
import VerifyEmail from './components/VerifyEmail';
import Profile from './components/Profile';
import Root from './components/Root';
import How from './components/How';
import ResendVerify from './components/ResendVerify';

class App extends Component {

  render() {
    return (
      <Root>
        <Toast />
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/forgotPassword' component={ForgotPassword} />
            <Route path='/resetPassword' component={ResetPassword} />
            <Route path='/verify' component={VerifyEmail} />
            <Route path='/resendVerify' component={ResendVerify} />
            <Route>
              <Layout>
                <Switch>
                  <Route exact path='/' component={Homepage} />
                  <Route exact path='/howitworks' component={How} />
                  <Route exact path='/:username' component={Profile} />
                </Switch>
              </Layout>
            </Route>
          </Switch>
        </BrowserRouter>
      </Root>
    );
  }
}

export default App;
