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

interface Props {}

export const Login = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });
  const classes = useStyles();

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
          <h2>Log In to Portal</h2>
          <p>Enter your email and password below</p>
          <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
    </form>
        </div>
      </div>
    </>
  );
});
