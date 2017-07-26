import { PROFILE, TOAST} from './constants.js';
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
    .then(() => {
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
