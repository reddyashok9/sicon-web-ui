import jwtDecode from 'jwt-decode'; //you must install jwt-decode using npm
import { loginActions } from '../app/containers/Login/slice';
import API from './api';
import { configureAppStore } from '../store/configureStore';

const store = configureAppStore();

export const CheckAuthentication = () => {
  const authToken = localStorage.getItem('token');

  if (authToken) {
    const decodedToken: any = jwtDecode(authToken);
    if (decodedToken.exp * 1000 < Date.now()) {
      //   store.dispatch(logoutUser());
    } else {
      console.log(decodedToken.exp);
      store.dispatch(loginActions.setAuth);
      API.defaults.headers.common['x-auth-token'] = authToken;
    }
  }
};
