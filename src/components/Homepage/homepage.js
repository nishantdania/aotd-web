import React, {Component} from 'react';
import cx from 'classnames';
import styles from './homepage.css'; 
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
