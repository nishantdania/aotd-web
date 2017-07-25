import { ACCOUNT, TOAST } from './constants.js';
import ApiCaller from './ApiCaller';
import messages from './messages.js';

export const resetPassword = (data) => (dispatch) => {
  
  dispatch({
    type: ACCOUNT.RESET_PASSWORD_REQUEST
  });

  ApiCaller.post(
    '/resetPassword',
    data
  )
  .then((res) => {
    dispatch({
      type: TOAST.SHOW_TOAST,
      data: {
        message: messages.RESET_PASSWORD_SUCCESS,
        timeout: null,  
      }
    });
    dispatch({
      type: ACCOUNT.RESET_PASSWORD_SUCCESS,
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
      type: ACCOUNT.RESET_PASSWORD_ERROR,
      data: err
    }); 
  });
}

