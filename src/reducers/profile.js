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
    case PROFILE.BOOST_SCORE_SUCCESS:
      const { xp, boosters } = action.data;
      return {
        ...state,
        score: {
          ...state.score, 
          xp,
          boosters
        } 
      }
    default:
      return state;
  }
};

export default profile;
