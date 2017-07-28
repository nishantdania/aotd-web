import { combineReducers } from 'redux';
import toast from './toast';
import userState from './userState';
import profile from './profile';
import userFeed from './userFeed';
import homeFeed from './homeFeed';

const aotd = combineReducers({
  userState,
  toast,
  profile,
  userFeed,
  homeFeed,
});

export default aotd;
