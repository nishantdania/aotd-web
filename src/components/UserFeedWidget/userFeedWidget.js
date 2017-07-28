import React, {Component} from 'react';
import cx from 'classnames';
import styles from './userFeedWidget.css'; 
import * as actions from '../../actions/profileActions.js';
import { connect } from 'react-redux';

class UserFeedWidget extends Component {

  componentDidMount () {
    this.loadMore(); 
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
      return <div>
        No art found
      </div>
    }
    return <div> 
      <div className={cx(styles['image-list'])}>
        {images.map((image, index) => 
          <img
            className={cx(styles['image'])} 
            key={index}
            src={image}
          />
        )}
      </div> 
      {hasNextPage ?
        <div 
          className={cx(styles['load-more'])}
          onClick={this.loadMore}
        >
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
