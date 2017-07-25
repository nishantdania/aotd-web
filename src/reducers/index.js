import { combineReducers } from 'redux';
import toast from './toast';
import userState from './userState';

const aotd = combineReducers({
  userState,
  toast,
});

export default aotd;
