import React, {Component} from 'react';
import cx from 'classnames';
import styles from './how.css'; 

class How extends Component {

  render () {

    return <div className={cx(styles['outer'])}>
      <div className={cx(styles['upper'])}>
        <h1>
          How it works
        </h1>
        <h2>
          The aim is to help you develop a habit of drawing daily. 
        </h2>
        <h2>
          This regular habit would build you into a better artist over time.
        </h2>
      </div>
      <section>
        <div className={cx(styles['left'])}>
          <div className={cx(styles['title'])}>
            Draw everyday
          </div>
          <div className={cx(styles['content'])}>
            Draw one thing everyday and upoad to gain points. As you move forward in the levels, <span>you will gain badges like Bronze, Silver, Gold and Platinum.</span>
          </div>
        </div>
        <div className={cx(styles['right'])}>
          <img alt='how' src='./assets/how1.jpg' />
        </div>
      </section>
      <section>
        <div className={cx(styles['left'])}>
          <div className={cx(styles['title'])}>
            Do not break the routine
          </div>
          <div className={cx(styles['content'])}>
            Skipping the drawing for 1 day reduces your XP. Skipping another day, reduces it further. <span>After missing out on day 3, you reach the start of the level again.</span>
          </div>
        </div>
        <div className={cx(styles['right'])}>
          <img alt='how' src='./assets/how2.jpg' />
        </div>
      </section>
      <section>
        <div className={cx(styles['left'])}>
          <div className={cx(styles['title'])}>
            Boosters
          </div>
          <div className={cx(styles['content'])}>
            If you don’t want to start over again after losing some XP, <span>you can use boosters to regain your previous maximum XP</span>. You’ll get some free boosters on your day 1, you can earn extra boosters if needed.
          </div>
        </div>
        <div className={cx(styles['right'])}>
          <img alt='how' src='./assets/how3.jpg'/>
        </div>
      </section>
    </div> 
  }
}

export default How;
