import axios from 'axios';
import requestConfig from './ApiConfig.js';

var createInstance = () => {
  var config = requestConfig;
  config = {
    ...config,
    validateStatus: (status) => {
      return status === 200;
    },
  };
console.log('config : ', config);
  var instance = new axios.create(config);
  return instance;
}

const ApiCaller = createInstance();

export default ApiCaller;
