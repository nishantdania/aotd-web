import { HOME_FEED } from './constants.js';
import ApiCaller from './ApiCaller';

export const fetchHomeFeed = (data) => (dispatch) => {
  
  ApiCaller.get(
    '/feed',
    {
      params: data
    }
  )
  .then((res) => {
    dispatch({
      type: HOME_FEED.FETCH_HOME_FEED_SUCCESS,
      data: res.data
    });
  })
  .catch((err) => {
  });
}

export const clearFeed = () => (dispatch) => {
  dispatch({
    type: HOME_FEED.HOME_FEED_CLEAR
  });
}
