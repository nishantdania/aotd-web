import { AUTH } from '../actions/constants';

const userState = (state = {
  isLoggedIn: false,
  user: {},
}, action) => {
  switch (action.type) {
    case AUTH.LOGIN_SUCCESS:
    case AUTH.CHECK_USER_STATE_SUCCESS:
      const { user } = action.data;
      return {
        ...state,
        isLoggedIn: true,
        user: user,  
      } 
    case AUTH.LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        user: {},  
      }
    default:
      return state;
  }
};

export default userState;
