import { AUTH, PROFILE } from '../actions/constants';

const userState = (state = {
  isLoggedIn: false,
  user: {},
  isUploadPending: true,
}, action) => {
  switch (action.type) {
    case AUTH.LOGIN_SUCCESS:
    case AUTH.CHECK_USER_STATE_SUCCESS:
      const { user, isUploadPending } = action.data;
      return {
        ...state,
        isLoggedIn: true,
        user: user,
        isUploadPending:  isUploadPending
      } 
    case AUTH.LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        user: {}, 
        isUploadPending: true
      }
    case PROFILE.BOOST_SCORE_SUCCESS:
      return {
        ...state,
        isUploadPending: action.data.isUploadPending
      }
    case PROFILE.ART_UPLOAD_SUCCESS:
      return {
        ...state,
        isUploadPending: false
      }
    default:
      return state;
  }
};

export default userState;
