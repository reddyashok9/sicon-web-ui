import { PayloadAction } from '@reduxjs/toolkit';
import { truncate } from 'fs';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Login container
export const initialState: ContainerState = {
  authenticated: false,
  loading: false,
  role: 'GUEST',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loadingLogin(state) {
      state.authenticated = false;
      state.loading = true;
      state.role = 'GUEST';
    },
    loadingLoginDone(state) {
      state.loading = false;
    },
    setAuth(state) {
      state.authenticated = true;
      state.loading = false;
    },
    unSetAuth(state) {
      state.authenticated = false;
      state.loading = false;
    },
    setUserRole(state, action: PayloadAction<string>) {
      state.role = action.payload;
    },
  },
});

export const { actions: loginActions, reducer, name: sliceKey } = loginSlice;
