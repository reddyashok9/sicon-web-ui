import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { loginActions } from './slice';

export function* doSomething() {}

export function* loginSaga() {
  yield takeLatest(loginActions.setAuth.type, doSomething);
}
