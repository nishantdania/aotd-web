import { HOME_FEED } from '../actions/constants';

const homeFeed = (state = {
  images: [],
  hasNextPage: true,
  last: '',
  limit: 4,
}, action) => {
  switch (action.type) {
    case HOME_FEED.FETCH_HOME_FEED_SUCCESS:
      const { images, nextPage, hasNextPage } = action.data;
      return {
        ...state,
        images: [...state.images, ...images],
        nextPage,
        hasNextPage
      }
    default:
      return state;
  }
};

export default homeFeed;
