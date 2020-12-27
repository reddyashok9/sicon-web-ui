import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.articles || initialState;

export const selectArticles = createSelector(
  [selectDomain],
  articlesState => articlesState,
);
