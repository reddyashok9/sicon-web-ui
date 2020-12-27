/**
 *
 * Accounts
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, accountsActions } from './slice';
import { selectAccounts } from './selectors';
import { accountsSaga } from './saga';
import { messages } from './messages';

interface Props {}

export const Accounts = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: accountsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const accounts = useSelector(selectAccounts);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(accountsActions.loadAccounts());
  }, []);


  return (
    <>
      <Helmet>
        <title>Accounts</title>
        <meta name="description" content="Description of Accounts" />
      </Helmet>
      <div>
        {t('')}
        {/*  {t(...messages.someThing)}  */}
        {accounts.map((account: any) => {
          console.log(account);
          return '';
        })}
      </div>
    </>
  );
});
