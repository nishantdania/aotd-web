import { HOME_FEED } from '../actions/constants';

const homeFeed = (state = {
  images: [],
  hasNextPage: true,
  last: '',
  limit: 12,
}, action) => {
  switch (action.type) {
    case HOME_FEED.FETCH_HOME_FEED_SUCCESS:
      const { images, next, hasNextPage } = action.data;
      return {
        ...state,
        images: [...state.images, ...images],
        last: next,
        hasNextPage
      }
    default:
      return state;
  }
};

export default homeFeed;
