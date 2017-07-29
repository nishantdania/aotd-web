import React, {Component} from 'react';
import cx from 'classnames';
import styles from './progressBar.css'; 

class ProgressBar extends Component {

  render () {

    const { xp, level, maxXP, baseXP, nextGoal, boostScore } = this.props;
    var maxPercent = (((maxXP-baseXP)/(nextGoal-baseXP))*100).toString() + '%';
    var curPercent = (((xp-baseXP)/(nextGoal-baseXP))*100).toString() + '%';
    var maxXPStyle = {
      width: maxPercent 
    };

    var curXPStyle = {
      width: curPercent 
    };

    return <div className={cx(styles['outer'], {[styles['extra-margin']]: maxXP > xp})}>
        <div className={cx(styles['progress-wrapper'])}>
          <div className={cx(styles['progress-base'])} />
          <div  
            style={maxXPStyle}
            className={cx(styles['progress-max'])}
          >
            {maxXP > xp ? 
              <div 
                onClick={boostScore}
                className={cx(styles['tooltip-top'])}>
                  Regain XP
              </div> : null}
          </div>
          <div className={cx(styles['progress-xp'])} 
            style={curXPStyle}
          >
            <div className={cx(styles['tooltip'])}>
              {xp} XP
            </div>
          </div>
        </div>
        <span>
          <div className={cx(styles['next-level-title'])}>
            Level {level+1}
          </div>
          <div className={cx(styles['next-level-xp'])}>
            {nextGoal} XP
          </div>
        </span>
      </div>
  }
}

export default ProgressBar;
