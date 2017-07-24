import { combineReducers } from 'redux';
import toast from './toast';

const aotd = combineReducers({
  toast,
});

export default aotd;
