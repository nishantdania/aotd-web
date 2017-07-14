import React, {Component} from 'react';
import cx from 'classnames';
import styles from './layout.css'; 
import Navbar from '../Navbar';

class Layout extends Component {

  render () {
    return <div>
      <Navbar />
      {this.props.children}
    </div>
  }
}

export default Layout;
