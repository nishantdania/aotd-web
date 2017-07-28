import { HOME_FEED } from './constants.js';
import ApiCaller from './ApiCaller';
import axios from 'axios';

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
