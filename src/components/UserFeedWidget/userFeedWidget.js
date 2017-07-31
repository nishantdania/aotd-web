import React, {Component} from 'react';
import cx from 'classnames';
import styles from './userFeedWidget.css'; 
import * as actions from '../../actions/profileActions.js';
import { connect } from 'react-redux';
import PhotoGrid from '../PhotoGrid';

class UserFeedWidget extends Component {

  componentDidMount () {
    this.loadMore(); 
  }

  componentWillUnmount () {
    this.props.clearProfile();
  }

  loadMore = () => {
    const { fetchUserFeed, userFeed, username } = this.props;
    const { nextPage, hasNextPage, limit } = userFeed;
    var params = {
      page: nextPage,
      limit: limit,
      username: username
    }
    fetchUserFeed(params);
  }

  render () {
    const { userFeed } = this.props;
    const { images, hasNextPage } = userFeed;

    if(images.length === 0) {
      return <div className={cx(styles['outer'])}>
        No art found
      </div>
    }
    return <div className={cx(styles['outer'])}>
      <PhotoGrid images={images}/>
      {hasNextPage ?
        <div 
          className={cx(styles['load-more'])}
          onClick={this.loadMore}>
            Load more
        </div>
      : null}
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    userFeed: state.userFeed,
  };
};

UserFeedWidget = connect(
  mapStateToProps,
  actions
)(UserFeedWidget);

export default UserFeedWidget;
