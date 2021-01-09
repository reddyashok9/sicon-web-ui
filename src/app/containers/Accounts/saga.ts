import { take, call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { accountsActions } from './slice';
import API from 'utils/api';

export function* getAccounts() {
  yield delay(500);

  try {
    // Call our request helper (see 'utils/request')
    const accounts: any = yield API.get(`account`);
    console.log(accounts.data);
    if (accounts?.data.length > 0) {
      yield put(accountsActions.accountsLoaded(accounts?.data));
    } else {
      // yield put(actions.repoError(RepoErrorType.USER_HAS_NO_REPO));
    }
  } catch (err) {
    if (err.response?.status === 404) {
      // yield put(actions.repoError(RepoErrorType.USER_NOT_FOUND));
    } else if (err.message === 'Failed to fetch') {
      // yield put(actions.repoError(RepoErrorType.GITHUB_RATE_LIMIT));
    } else {
      // yield put(actions.repoError(RepoErrorType.RESPONSE_ERROR));
    }
  }
}

export function* accountsSaga() {
  yield takeLatest(accountsActions.loadAccounts.type, getAccounts);
}
