import axios from 'axios';

const myAxios = axios.create({
  baseURL: `http://localhost:5000/api/`,
});

myAxios.interceptors.response.use(
  function (response) {
    myAxios.defaults.headers.common['x-auth-header'] = response.data.token;
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default myAxios;
