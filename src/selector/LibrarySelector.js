import { createSelector } from 'reselect';

const getImages = (state) => state.images;
const getVideos = (state) => state.videos;

export const makeGetImagesSelector = () => {
  return createSelector(
    getImages,
    images => (images)
  );
}


export const makeGetVideosSelector = () => {
  return createSelector(
    getVideos,
    videos => (videos)
  );
}
