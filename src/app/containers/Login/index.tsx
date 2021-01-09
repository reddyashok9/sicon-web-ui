/**
 *
 * Login
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, loginActions } from './slice';
import { selectLogin } from './selectors';
import { loginSaga } from './saga';
import { messages } from './messages';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import Logo from '../../../logoonwhite.png';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import API from '../../../utils/api';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode'; //you must install jwt-decode using npm

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  }),
);

interface IFormInput {
  email: string;
  password: string;
}

interface Props {}

export const Login = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });
  const classes = useStyles();

  const { control, handleSubmit } = useForm<IFormInput>();
  let history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (data: IFormInput) => {
    console.log(data);
    const auth = await API.post(`auth`, { ...data });
    if (auth) {
      API.defaults.headers.common['x-auth-token'] = auth.data.token;
      localStorage.setItem('token', `${auth.data.token}`);
      const decodedToken: any = jwtDecode(auth.data.token);
      localStorage.setItem('role', `${decodedToken.role}`);

      dispatch(loginActions.setAuth);
      history.push('/');
    } else {
      console.log('Do Something');
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = useSelector(selectLogin);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <div className="loginContainer">
        {t('')}
        {/*  {t(...messages.someThing)}  */}
        <div className="loginBox">
          <img src={Logo} />
          <Typography
            variant="h5"
            color="secondary"
            className="loginHeaderText"
          >
            Log In to Portal
          </Typography>
          <Typography variant="caption">
            Enter your email and password below
          </Typography>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ onChange, value }) => (
                <TextField
                  onChange={onChange}
                  value={value}
                  label="Email Address"
                  fullWidth
                  className="textfield"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ onChange, value }) => (
                <TextField
                  onChange={onChange}
                  type="password"
                  value={value}
                  label="Password"
                  fullWidth
                  className="textfield"
                />
              )}
            />
            <Typography variant="caption">Forgot Password?</Typography>
            <br />
            <br />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
});
