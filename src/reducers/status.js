import { AUTH } from '../actions/constants';
import {LOADING, INIT} from '../utils/asyncStatusHelper';

const status = (state = {
  signup: { asyncStatus: INIT },
  login: { asyncStatus: INIT },
}, action) => {
  switch (action.type) {
    case AUTH.SIGNUP_REQUEST:
      return {
        ...state,
        signup: {asyncStatus: LOADING}
      }
    case AUTH.SIGNUP_SUCCESS:
    case AUTH.SIGNUP_ERROR:
      return {
        ...state,
        signup: {asyncStatus: INIT}
      }
    case AUTH.LOGIN_REQUEST:
      return {
        ...state,
        login: {asyncStatus: LOADING}
      }
    case AUTH.LOGIN_SUCCESS:
    case AUTH.LOGIN_ERROR:
      return {
        ...state,
        login: {asyncStatus: INIT}
      }
    default:
      return state;
  }
};

export default status;
