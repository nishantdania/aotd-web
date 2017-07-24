import { HIDE_TOAST, SHOW_TOAST } from '../actions/toastActions';

const toast = (state = {
  show: false,
  message: '',
  timeout: null
}, action) => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        show: true,
        message: action.data.message || '',
        timeout: action.data.timeout || null
      }
    case HIDE_TOAST:
      return {
        ...state,
        show: false,
        timeout: null,
        message: ''
      }
    default:
      return state;
  }
};

export default toast;
