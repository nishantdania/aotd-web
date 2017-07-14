import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout  from './components/Layout';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/' component={Homepage}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
