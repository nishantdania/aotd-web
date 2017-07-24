import { TOAST } from './constants.js';

export const hideToastAction = () => (dispatch) => {
  dispatch({
    type: TOAST.HIDE_TOAST
  });
}

export const showToastAction = (message, timeout) => (dispatch) => {
  var data = {
    message,
    timeout
  };
  dispatch({
    type: TOAST.SHOW_TOAST,
    data: data
  });
}
