import ApiCaller from './ApiCaller';

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

