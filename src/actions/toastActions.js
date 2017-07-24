export const HIDE_TOAST = 'HIDE_TOAST';
export const SHOW_TOAST = 'SHOW_TOAST';

export const hideToastAction = () => (dispatch) => {
  dispatch({
    type: HIDE_TOAST
  });
}

export const showToastAction = (message, timeout) => (dispatch) => {
  var data = {
    message,
    timeout
  };
  dispatch({
    type: SHOW_TOAST,
    data: data
  });
}
