import { combineReducers } from 'redux';
import toast from './toast';
import userState from './userState';
import profile from './profile';

const aotd = combineReducers({
  userState,
  toast,
  profile,
});

export default aotd;
