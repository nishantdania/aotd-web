import { combineReducers } from 'redux';
import toast from './toast';
import userState from './userState';
import profile from './profile';
import userFeed from './userFeed';
import homeFeed from './homeFeed';
import status from './status';

const aotd = combineReducers({
  userState,
  toast,
  profile,
  userFeed,
  homeFeed,
  status,
});

export default aotd;
