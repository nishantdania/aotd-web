const prodConfig = {
  baseURL: 'http://localhost:1337',
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json'
  },
}

const devConfig = {
  baseURL: 'http://localhost:1337',
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json'
  },
}

const requestConfig = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default requestConfig;
