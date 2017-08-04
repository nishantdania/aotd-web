import React, {Component} from 'react';
import cx from 'classnames';
import styles from './homeFeedWidget.css'; 
import * as actions from '../../actions/homepageActions.js';
import { connect } from 'react-redux';
import PhotoGrid from '../PhotoGrid';
import SolidButton from '../Buttons/SolidButton';

class HomeFeedWidget extends Component {

  componentDidMount () {
    this.loadMore(); 
  }

  componentWillUnmount () {
    this.props.clearFeed();
  }

  loadMore = () => {
    const { fetchHomeFeed, homeFeed } = this.props;
    const { last, limit } = homeFeed;
    var params = {
      last: last,
      limit: limit,
    }
    fetchHomeFeed(params);
  }

  render () {
    const { homeFeed } = this.props;
    const { images, hasNextPage } = homeFeed;

    if(images.length === 0) {
      return <div className={cx(styles['outer'])} >
        
      </div>
    }
    return <div className={cx(styles['outer'])}>
      <div className={cx(styles['title'])}>
        Community feed
      </div>
      <PhotoGrid 
        images={images}
        isHomeFeed={true}
      />
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
    homeFeed: state.homeFeed,
  };
};

HomeFeedWidget = connect(
  mapStateToProps,
  actions
)(HomeFeedWidget);

export default HomeFeedWidget;
