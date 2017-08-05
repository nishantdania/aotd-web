import { PROFILE, TOAST, USER_FEED } from './constants.js';
import ApiCaller from './ApiCaller';
import axios from 'axios';
import messages from './messages.js';

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

export const uploadFile = (file) => (dispatch) => {
  
  var getPresignedUrl = () => {
    return ApiCaller.get(
      '/presignedUrl',
      {
        params: {
          filename: file.name
        }
      }
    )
  };

  var uploadFileToUrl = (res) => new Promise((resolve, reject) => {
    if(res.data.url) {
      const {url}= res.data;
      axios.put(url, file)
      .then(resolve)
      .catch(reject)
    }
    else {
      reject();
    }
  });

  var postDetailsToApi = (res) => new Promise((resolve, reject) => {
    if(res.status !== 200) {
      reject();
    }
    dispatch({
      type: PROFILE.ART_UPLOAD_REQUEST,
    });
    var parser = document.createElement('a');
    parser.href = res.config.url;
    var url = parser.pathname;
    var data = {
      url
    };
    ApiCaller.post(
      '/image',
      data 
    )
    .then((res) => {
      dispatch({
        type: PROFILE.ART_UPLOAD_SUCCESS,
        data: {
          url: file.preview,
          score: res.data.score
        } 
      });
      dispatch({
        type: TOAST.SHOW_TOAST,
        data: {
          message: messages.UPLOAD_SUCCESS,
          timeout: 3000,  
        }
      });
    })
    .catch(reject)
  });

  getPresignedUrl()
  .then(uploadFileToUrl)
  .then(postDetailsToApi)
  .catch()
}

export const fetchUserFeed = (data) => (dispatch) => {
  
  ApiCaller.get(
    '/user/images',
    {
      params: data
    }
  )
  .then((res) => {
    dispatch({
      type: USER_FEED.FETCH_USER_FEED_SUCCESS,
      data: res.data
    });
  })
  .catch((err) => {
  });
}

export const boostScore = () => (dispatch) => {
  
  ApiCaller.post(
    '/user/score/boost'
  )
  .then((res) => {
    dispatch({
      type: PROFILE.BOOST_SCORE_SUCCESS,
      data: res.data
    });
  })
  .catch((err) => {
  });
}

export const clearProfile = () => (dispatch) => {
  dispatch({
    type: PROFILE.PROFILE_CLEAR
  });
}

export const changeAvatar = (file) => (dispatch) => {
  
  ApiCaller.get(
    '/profile/presignedAvatar',
    {
      params: {
        filename: file.name
      }
    }
  )
  .then((res) => {
    var url = res.data.url;
    axios.put(url, file)
    .then()
    .catch()
  })
  .catch((err) => {
  });
  dispatch({
    type: PROFILE.CHANGE_AVATAR_SUCCESS,
    data: file 
  });
}
