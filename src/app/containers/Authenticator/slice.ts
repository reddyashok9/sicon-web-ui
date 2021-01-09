import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Authenticator container
export const initialState: ContainerState = {};

const authenticatorSlice = createSlice({
  name: 'authenticator',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const {
  actions: authenticatorActions,
  reducer,
  name: sliceKey,
} = authenticatorSlice;
