import { createAction } from 'redux-actions';

import * as types from '../constants/actionTypes';

// Returns an action type, SELECTED_IMAGE and the image selected
// export const selectImageAction = (image) => ({
//   type: types.SELECTED_IMAGE,
//   image
// });

// // Returns an action type, SELECTED_VIDEO and the video selected
// export const selectVideoAction = (video) => ({
//   type: types.SELECTED_VIDEO,
//   video
// });

// // Returns an action type, SEARCH_MEDIA_REQUEST and the search criteria
// export const searchMediaAction = (payload) => ({
//   type: types.SEARCH_MEDIA_REQUEST,
//   payload
// });

export const selectImageAction = createAction('SELECTED_IMAGE', image => ({ image }));
export const selectVideoAction = createAction('SELECTED_VIDEO', video => ({ video }));
export const searchMediaAction = createAction('SEARCH_MEDIA_REQUEST', payload => ({ payload }));

export const shutterVideosAction = createAction('SHUTTER_VIDEOS_SUCCESS', videos => ({ videos }));
export const flickrImagesAction = createAction('FLICKR_IMAGES_SUCCESS', images => ({ images }));
