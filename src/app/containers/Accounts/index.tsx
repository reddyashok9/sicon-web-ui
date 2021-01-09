/**
 *
 * Accounts
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, accountsActions } from './slice';
import { selectAccounts } from './selectors';
import { accountsSaga } from './saga';
import { messages } from './messages';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import MUIDataTable from 'mui-datatables';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
interface Props {}

export const Accounts = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: accountsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const accounts: any = useSelector(selectAccounts);

  const [openAddAccount, setOpenAddAccount] = useState(false);

  const handleClickOpen = () => {
    setOpenAddAccount(true);
  };

  const handleClose = () => {
    setOpenAddAccount(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(accountsActions.loadAccounts());
  }, []);

  const columns = [
    {
      name: 'companyName',
      label: 'Company Name',
      options: {
        filter: true,
      },
    },
    {
      name: 'adminName',
      label: 'Admin Name',
      options: {
        filter: true,
      },
    },
    {
      name: 'adminEmail',
      label: 'Admin Email',
      options: {
        filter: true,
      },
    },
  ];

  const [responsive, setResponsive] = useState('vertical');
  const [tableBodyHeight, setTableBodyHeight] = useState('400px');
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState('');

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
  };

  return (
    <>
      <Helmet>
        <title>Accounts</title>
        <meta name="description" content="Description of Accounts" />
      </Helmet>
      <BreadcrumbsItem to="/">Account Mangement</BreadcrumbsItem>
      <div className="actionBar">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add Account
        </Button>
      </div>
      <div className="dataTableContainer">
        <MUIDataTable
          title={'Accounts'}
          data={accounts}
          columns={columns}
          options={options}
        />
      </div>
      <Dialog
        open={openAddAccount}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});
