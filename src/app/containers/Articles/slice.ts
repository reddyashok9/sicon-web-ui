import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Articles container
export const initialState: ContainerState = {};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const {
  actions: articlesActions,
  reducer,
  name: sliceKey,
} = articlesSlice;
