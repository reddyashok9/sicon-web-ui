import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Accounts container
export const initialState: ContainerState = {
  accounts: [],
  loading: false,
  error: null,
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    accountsLoaded(state, action: PayloadAction<any[]>) {
      const accounts = action.payload;
      state.accounts = accounts;
      state.loading = false;
    },
    loadAccounts(state) {
      state.loading = true;
      state.error = null;
      state.accounts = [];
    },
  },
});

export const {
  actions: accountsActions,
  reducer,
  name: sliceKey,
} = accountsSlice;
