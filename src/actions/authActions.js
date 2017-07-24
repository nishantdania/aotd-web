import { AUTH } from './constants.js';
import ApiCaller from './ApiCaller';

export const signup = (data) => (dispatch) => {
  
  dispatch({
    type: AUTH.SIGNUP_REQUEST
  });

  ApiCaller.post(
    '/register',
    data
  )
  .then((res) => {
    dispatch({
      type: AUTH.SIGNUP_SUCCESS,
      data: res.data
    });
  })
  .catch((err) => {
    dispatch({
      type: AUTH.SIGNUP_ERROR,
      data: err
    }); 
  });
}
