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
    case PROFILE.PROFILE_CLEAR:
      return {}
    case PROFILE.CHANGE_AVATAR_SUCCESS:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          avatarURL: action.data.preview
        }
      }
    case PROFILE.ART_UPLOAD_SUCCESS:
      return {
        ...state,
        score: action.data.score
      }
    default:
      return state;
  }
};

export default profile;
