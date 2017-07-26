import axios from 'axios';
import requestConfig from './ApiConfig.js';

var addAuthHeader = (config) => {
  if(localStorage.getItem('token')) {
    var token = 'Bearer ' + localStorage.getItem('token');
    return config = {
      ...config,
      headers: {
        ...config.headers,
        'Authorization': token
      }
    };
  }
  return config;
}

var createInstance = () => {
  var config = requestConfig;
  
  config = {
    ...config,
    validateStatus: (status) => {
      return status === 200;
    },
  };

  config = addAuthHeader(config);

  var instance = new axios.create(config);
  return instance;
}

const ApiCaller = createInstance();

export default ApiCaller;
