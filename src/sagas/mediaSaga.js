import { put, call } from 'redux-saga/effects';
import { flickrImages, shutterStockVideos } from '../services/media';
import * as types from '../constants/actionTypes';

import {
  shutterVideosAction,
  flickrImagesAction,
  selectImageAction,
  selectVideoAction
} from '../actions/mediaActions';

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* searchMediaSaga({ payload }) {
  try {
    const videos = yield call(shutterStockVideos, payload.payload);
    const images = yield call(flickrImages, payload.payload);
    yield [
      put(shutterVideosAction(videos)),
      put(selectVideoAction(videos[0])),
      put(flickrImagesAction(images)),
      put(selectImageAction(images[0]))
    ];
  } catch (error) {
    yield put({ type: 'SEARCH_MEDIA_ERROR', error });
  }
}
