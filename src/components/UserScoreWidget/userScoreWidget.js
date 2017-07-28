import React, {Component} from 'react';
import cx from 'classnames';
import styles from './userScoreWidget.css'; 
import ProgressBar from '../ProgressBar';

class UserScoreWidget extends Component {

  renderPublicData = (score) => {
    const { xp, level } = score || {};
    return <div className={cx(styles['publicScore'])}>
      <span>XP: {xp}</span>
      <span>Level: {level}</span>
    </div>
  }

  renderPrivateData = (score) => {  
    const { xp, level, maxXP, baseXP, nextGoal, boosters } = score || {};
    return <div className={cx(styles['privateScore'])}>
      <div className={cx(styles['boosters'])}>
        <span>
          Boosters available : {boosters}
        </span>
        <span className={cx(styles['link'])}>
          Use Booster
        </span>
        <span className={cx(styles['link'])}>
          Earn Boosters
        </span>
      </div>
      <ProgressBar 
        level={level}
        xp={xp}
        maxXP={maxXP}
        nextGoal={nextGoal}
        baseXP={baseXP}
      />
    </div>
  }

  render () {

    const { score } = this.props;
    const { xp, level, maxXP, baseXP, boosters } = score || {};
  
    return <div>
      {this.renderPublicData(score)}
      {this.renderPrivateData(score)}
    </div> 
  }
}

export default UserScoreWidget;
