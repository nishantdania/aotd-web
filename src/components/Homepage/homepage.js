import React, {Component} from 'react';
import Hero from './Hero';
import HomeFeedWidget from '../HomeFeedWidget';

class Homepage extends Component {

  render () {
    return <div>
      <Hero />
      <HomeFeedWidget />
    </div>
  }
}

export default Homepage;
