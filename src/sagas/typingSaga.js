import { put } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';

export function* setTypingMessage({ payload }) {
  try {
    yield [
      put({ type: types.SET_TYPING_VALUE_SUCC, payload })
    ];
  } catch (error) {
    yield put({ type: types.SET_TYPING_VALUE_FAIL, error });
  }
}
