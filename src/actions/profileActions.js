import { PROFILE } from './constants.js';
import ApiCaller from './ApiCaller';

export const fetchProfile = (data) => (dispatch) => {
  
  ApiCaller.get(
    '/user/profile',
    {
      params: data
    }
  )
  .then((res) => {
    dispatch({
      type: PROFILE.FETCH_PROFILE_SUCCESS,
      data: res.data
    });
  })
  .catch((err) => {
     
  });
}
