import { USER_FEED } from '../actions/constants';

const userFeed = (state = {
  images: [],
  nextPage: 1,
  hasNextPage: true,
  limit: 2,
}, action) => {
  switch (action.type) {
    case USER_FEED.FETCH_USER_FEED_SUCCESS:
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

export default userFeed;
