import { put } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { contacts } from '../mockup/static-data';

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* getContacts() {
  try {
    yield [
      put({ type: types.GET_CONTACTS_SUCC, contacts })
    ];
  } catch (error) {
    yield put({ type: types.GET_CONTACTS_FAIL, error });
  }
}
