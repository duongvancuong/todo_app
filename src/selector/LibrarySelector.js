import { createSelector } from 'reselect';
// import memoize from 'lodash.memoize';
import memoize from "fast-memoize";

export const getImages = (state) => {
  console.log("getData called");
  return state.images[0];
}

export const getVideos = (state) => {
  console.log("getData called");
  return state.videos[0];
}

export const imageSelected = (state) => {
  console.log("getData called");
  return state.images.selectedImage;
}

export const videoSelected = (state) => {
  console.log("getData called");
  return state.videos.selectedVideo;
}

export const makeGetImagesSelector = createSelector(
  getImages,
  images => memoize(() => (images))
);

export const makeGetVideosSelector = createSelector(
  getVideos,
  videos => memoize(() => (videos))
  );

export const makeSelectImageSelector = createSelector(
  imageSelected,
  image => memoize(() => (image))
);

export const makeSelectVideoSelector = createSelector(
  videoSelected,
  video => memoize(() => (video))
);
