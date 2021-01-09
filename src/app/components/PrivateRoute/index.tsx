/**
 *
 * PrivateRoute
 *
 */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode'; //you must install jwt-decode using npm

import { Redirect, Route, RouteProps } from 'react-router-dom';
import { selectLogin } from '../../containers/Login/selectors';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginActions, reducer, sliceKey } from '../../containers/Login/slice';
import { loginSaga } from '../../containers/Login/saga';
import API from '../../../utils/api';
interface Props extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any;
}

export function PrivateRoute(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });
  const { component: Component, ...rest } = props;
  const dispatch = useDispatch();

  let token = localStorage.getItem('token');
  let auth;

  if (token) {
    const decodedToken: any = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      auth = false;
    } else {
      auth = true;
      dispatch(loginActions.setAuth);
      API.defaults.headers.common['x-auth-token'] = token;
    }
  }

  const login = useSelector(selectLogin);

  console.log(login);

  return (
    <Route
      {...rest}
      render={routeProps =>
        auth ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
}
