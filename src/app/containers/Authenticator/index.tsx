/**
 *
 * Authenticator
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectAuthenticator } from './selectors';
import { selectLogin } from '../Login/selectors';

import { Redirect, Route, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any;
}

export function Authenticator(props: PrivateRouteProps) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  const { component: Component, ...rest } = props;

  const login = useSelector(selectLogin);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const authenticator = useSelector(selectAuthenticator);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <Route
      {...rest}
      render={routeProps =>
        login.authenticated ? (
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
