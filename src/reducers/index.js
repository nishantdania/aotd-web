import { combineReducers } from 'redux';
import toast from './toast';
import userState from './userState';
import profile from './profile';
import userFeed from './userFeed';

const aotd = combineReducers({
  userState,
  toast,
  profile,
  userFeed,
});

export default aotd;
