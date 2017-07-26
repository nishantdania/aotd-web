import { PROFILE } from '../actions/constants';

const profile = (state = {

}, action) => {
  switch (action.type) {
    case PROFILE.FETCH_PROFILE_SUCCESS:
      const { userDetails } = action.data;
      return {
        userDetails
      }
    default:
      return state;
  }
};

export default profile;
