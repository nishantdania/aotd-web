import { USER_FEED, PROFILE } from '../actions/constants';

const userFeed = (state = {
  images: [],
  nextPage: 1,
  hasNextPage: true,
  limit: 12,
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
    case PROFILE.PROFILE_CLEAR:
      return {
        ...state,
        images: [],
        nextPage: 1,
        hasNextPage: true
      }
    case PROFILE.ART_UPLOAD_SUCCESS:
      return {
        ...state,
        images: [action.data, ...state.images]
      }
    default:
      return state;
  }
};

export default userFeed;
