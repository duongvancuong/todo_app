import { put, call, select } from 'redux-saga/effects';
import { getCategories } from '../services/post';
import * as types from '../constants/actionTypes';

export function* getCategoriesSaga() {
  try {
    const auth_token = yield select(getToken);
    const { categories, error_code } = yield call(getCategories, auth_token);
    yield [
      put({type: types.GET_CATEGORIES_SUCC, payload: categories}),
    ];
  } catch (error) {
    yield put({type: types.GET_CATEGORIES_FAIL, error});
  }
}

// Get state on redux-store
const getToken = (state) => state.auth.token
