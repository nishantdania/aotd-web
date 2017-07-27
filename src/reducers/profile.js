import { PROFILE } from '../actions/constants';

const profile = (state = {

}, action) => {
  switch (action.type) {
    case PROFILE.FETCH_PROFILE_SUCCESS:
      const { userDetails, score } = action.data;
      return {
        userDetails,
        score
      }
    default:
      return state;
  }
};

export default profile;
