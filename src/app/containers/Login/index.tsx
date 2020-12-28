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
import { reducer, sliceKey } from './slice';
import { selectLogin } from './selectors';
import { loginSaga } from './saga';
import { messages } from './messages';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from 'react-hook-form';
import Logo  from '../../../logoonwhite.png';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
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

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = useSelector(selectLogin);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

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
          <h2>Log In to Portal</h2>
          <p>Enter your email and password below</p>
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
                />
              )}
            />
            <Button variant="contained" color="primary" >Submit</Button>
          </form>
        </div>
      </div>
    </>
  );
});
