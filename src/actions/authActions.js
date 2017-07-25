import { AUTH, TOAST } from './constants.js';
import ApiCaller from './ApiCaller';
import messages from './messages.js';

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
      type: TOAST.SHOW_TOAST,
      data: {
        message: messages.SIGNUP_SUCCESS,
        timeout: null,  
      }
    });
    dispatch({
      type: AUTH.SIGNUP_SUCCESS,
      data: res.data
    });
  })
  .catch((err) => {
    dispatch({
      type: TOAST.SHOW_TOAST,
      data: {
        message: err.response.data.message,
        timeout: 3000,  
      }
    });
    dispatch({
      type: AUTH.SIGNUP_ERROR,
      data: err
    }); 
  });
}

export const login = (data) => (dispatch) => {
  
  dispatch({
    type: AUTH.LOGIN_REQUEST
  });

  ApiCaller.post(
    '/login',
    data
  )
  .then((res) => {
    dispatch({
      type: AUTH.LOGIN_SUCCESS,
      data: res.data
    });
  })
  .catch((err) => {
    dispatch({
      type: TOAST.SHOW_TOAST,
      data: {
        message: err.response.data.message,
        timeout: 3000,  
      }
    });
    dispatch({
      type: AUTH.LOGIN_ERROR,
      data: err
    }); 
  });
}
