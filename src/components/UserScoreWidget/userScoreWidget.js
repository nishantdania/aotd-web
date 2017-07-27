import React, {Component} from 'react';
import cx from 'classnames';
import styles from './userScoreWidget.css'; 

class UserScoreWidget extends Component {

  renderPublicData = (score) => {
    const { xp, level } = score || {};
    return <div className={cx(styles['publicScore'])}>
      <span>XP: {xp}</span>
      <span>Level: {level}</span>
    </div>
  }

  render () {

    const { score } = this.props;
    const { xp, level, maxXP, baseXP } = score || {};
  
    return <div>
      {this.renderPublicData(score)}
    </div> 
  }
}

export default UserScoreWidget;
