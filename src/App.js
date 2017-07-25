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

class App extends Component {
  render() {
    return (
      <div>
        <Toast />
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/forgotPassword' component={ForgotPassword} />
            <Route path='/resetPassword' component={ResetPassword} />
            <Route path='/verify' component={VerifyEmail} />
            <Route>
              <Layout>
                <Switch>
                  <Route path='/' component={Homepage} />
                </Switch>
              </Layout>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
