import React, {Component} from 'react';
import cx from 'classnames';
import styles from './homeFeedWidget.css'; 
import * as actions from '../../actions/homepageActions.js';
import { connect } from 'react-redux';
import PhotoGrid from '../PhotoGrid';

class HomeFeedWidget extends Component {

  componentDidMount () {
    this.loadMore(); 
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
      return <div>
        No art found
      </div>
    }
    return <div>
      <PhotoGrid 
        images={images}
        isHomeFeed={true}
      />
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
    homeFeed: state.homeFeed,
  };
};

HomeFeedWidget = connect(
  mapStateToProps,
  actions
)(HomeFeedWidget);

export default HomeFeedWidget;
