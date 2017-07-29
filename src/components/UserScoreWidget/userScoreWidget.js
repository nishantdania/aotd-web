import React, {Component} from 'react';
import cx from 'classnames';
import styles from './userScoreWidget.css'; 
import ProgressBar from '../ProgressBar';
import * as actions from '../../actions/profileActions.js';
import { connect } from 'react-redux';

class UserScoreWidget extends Component {

  handleBoostScore = () => {
    this.props.boostScore();
  }

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
          (Earn free boosters)
        </span>
      </div>
      <ProgressBar 
        level={level}
        xp={xp}
        maxXP={maxXP}
        nextGoal={nextGoal}
        baseXP={baseXP}
        boostScore={this.handleBoostScore}
      />
    </div>
  }

  render () {

    const { score } = this.props;
    const { xp, level, maxXP, baseXP, boosters } = score || {};
  
    return <div className={cx(styles['outer'])}>
      {this.renderPublicData(score)}
      {this.renderPrivateData(score)}
    </div> 
  }
}

UserScoreWidget = connect(
  null,
  actions
)(UserScoreWidget);

export default UserScoreWidget;
