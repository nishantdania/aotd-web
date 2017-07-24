import { TOAST } from '../actions/constants';

const toast = (state = {
  show: false,
  message: '',
  timeout: null
}, action) => {
  switch (action.type) {
    case TOAST.SHOW_TOAST:
      return {
        ...state,
        show: true,
        message: action.data.message || '',
        timeout: action.data.timeout || null
      }
    case TOAST.HIDE_TOAST:
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
