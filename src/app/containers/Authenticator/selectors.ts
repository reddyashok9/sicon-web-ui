import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.authenticator || initialState;

export const selectAuthenticator = createSelector(
  [selectDomain],
  authenticatorState => authenticatorState,
);
