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
import {
  Button,
  Checkbox,
  createStyles,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm, Controller } from 'react-hook-form';

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

interface IFormAddAccount {
  adminEmail?: String;
  companyName: string;
  adminName?: string;
  adminContactNumber?: number;
  permissionOne?: boolean;
  features?: Array<string>;
}

export const Accounts = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: accountsSaga });
  const classes = useStyles();
  const { control, handleSubmit } = useForm<IFormAddAccount>();

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

  const onSubmit = (data: IFormAddAccount) => {
    console.log(data);
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
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Add New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter below details to create a new account
          </DialogContentText>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Controller
                  name="companyName"
                  control={control}
                  defaultValue=""
                  render={({ onChange, value }) => (
                    <TextField
                      autoFocus
                      margin="dense"
                      label="Company Name"
                      type="text"
                      value={value}
                      onChange={onChange}
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="adminName"
                  control={control}
                  defaultValue=""
                  render={({ onChange, value }) => (
                    <TextField
                      autoFocus
                      margin="dense"
                      label="Admin Name"
                      type="text"
                      value={value}
                      onChange={onChange}
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="adminEmail"
                  control={control}
                  defaultValue=""
                  render={({ onChange, value }) => (
                    <TextField
                      autoFocus
                      margin="dense"
                      label="Admin Email"
                      type="text"
                      value={value}
                      onChange={onChange}
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="adminContactNumber"
                  control={control}
                  defaultValue=""
                  render={({ onChange, value }) => (
                    <TextField
                      autoFocus
                      margin="dense"
                      label="Admin Contact"
                      type="text"
                      value={value}
                      onChange={onChange}
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="ARTICLES"
                  control={control}
                  defaultValue={false}
                  render={props => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={e => props.onChange(e.target.checked)}
                          checked={props.value}
                          name="ARTICLES"
                        />
                      }
                      label="Articles Management"
                    />
                  )} // props contains: onChange, onBlur and value
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="STOCK"
                  control={control}
                  defaultValue={false}
                  render={props => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={e => props.onChange(e.target.checked)}
                          checked={props.value}
                          name="STOCK"
                        />
                      }
                      label="Stock Management"
                    />
                  )} // props contains: onChange, onBlur and value
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="DISPATCH"
                  control={control}
                  defaultValue={false}
                  render={props => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={e => props.onChange(e.target.checked)}
                          checked={props.value}
                          name="DISPATCH"
                        />
                      }
                      label="Dispatch Management"
                    />
                  )} // props contains: onChange, onBlur and value
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="SALES"
                  control={control}
                  defaultValue={false}
                  render={props => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={e => props.onChange(e.target.checked)}
                          checked={props.value}
                          name="SALES"
                        />
                      }
                      label="Sales Management"
                    />
                  )} // props contains: onChange, onBlur and value
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="COSTENTRY"
                  control={control}
                  defaultValue={false}
                  render={props => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={e => props.onChange(e.target.checked)}
                          checked={props.value}
                          name="COSTENTRY"
                        />
                      }
                      label="Cost to Entry Management"
                    />
                  )} // props contains: onChange, onBlur and value
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="REPORTS"
                  control={control}
                  defaultValue={false}
                  render={props => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={e => props.onChange(e.target.checked)}
                          checked={props.value}
                          name="REPORTS"
                        />
                      }
                      label="Reports"
                    />
                  )} // props contains: onChange, onBlur and value
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            color="primary"
            type="submit"
          >
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});
