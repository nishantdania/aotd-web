import React, {Component} from 'react';
import cx from 'classnames';
import styles from './userFeedWidget.css'; 
import * as actions from '../../actions/profileActions.js';
import { connect } from 'react-redux';
import PhotoGrid from '../PhotoGrid';
import SolidButton from '../Buttons/SolidButton';

class UserFeedWidget extends Component {

  componentDidMount () {
    this.loadMore(); 
  }

  componentWillUpdate (nextProps) {
    var old = this.props.username;
    var current = nextProps.username;
    if(old !== current) {
      this.props.clearProfile();
    }
  }

  componentWillUnmount () {
    this.props.clearProfile();
  }

  loadMore = () => {
    const { fetchUserFeed, userFeed, username } = this.props;
    const { nextPage, limit } = userFeed;
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
      </div>
    }
    return <div className={cx(styles['outer'])}>
      <PhotoGrid images={images}/>
      {hasNextPage ?
        <div className={cx(styles['load-more'])}>
          <SolidButton 
            text='Load more'
            action={this.loadMore}>
          </SolidButton>
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
