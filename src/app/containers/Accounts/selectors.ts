import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.accounts || initialState;

export const selectAccounts = createSelector(
  [selectDomain],
  accountsState => accountsState.accounts,
);
