import ApiCaller from './ApiCaller';
import messages from './messages.js';
import { TOAST } from './constants.js';

export const resetPassword = (data) => (dispatch) => {
  return ApiCaller.post(
    '/resetPassword',
    data
  );
}

export const verifyEmail = (data) => (dispatch) => {
  return ApiCaller.post(
    '/verify',
    data
  );
}

export const resetPasswordRequest = (data) => (dispatch) => {

  dispatch({
    type: TOAST.SHOW_TOAST,
    data: {
      message: messages.FORGOT_PASSWORD_EMAIL_SENT,
      timeout: 3000,  
    }
  });

  ApiCaller.post(
    '/resetPasswordRequest',
    data
  );
}

