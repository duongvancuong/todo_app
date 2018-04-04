import { put, call } from 'redux-saga/effects';
import { getInstgramUser } from '../services/instagramUser';
import * as types from '../constants/actionTypes';

export function* getInstgramUserSaga() {
  try {
    const userProfile = yield call(getInstgramUser);
    yield [
      put({ type: types.GET_INFO_INSTAGRAM_USER_SUCCESS, payload: {userProfile :userProfile.data} }),
    ];
  } catch (error) {
    yield put({ type: types.GET_INFO_INSTAGRAM_USER_ERROR, error });
  }
}
