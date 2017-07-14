import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout  from './components/Layout';
import Homepage from './components/Homepage';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />
          <Route>
            <Layout>
              <Switch>
                <Route path='/' component={Homepage} />
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
