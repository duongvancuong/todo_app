import { UnauthenticatedRequest } from '../../api';
import {
  FLICKR_API_KEY,
  SHUTTER_CLIENT_ID,
  SHUTTER_CLIENT_SECRET,
  API_BASE_URL,
  API_BASE,
  URL, FLICKR_API_ENDPOINT, API_BASE_FLICKR } from './constants';

const basicAuth = () => 'Basic '.concat(window.btoa(`${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}`));

const CONFIG_OPTION = {
  baseURL: API_BASE_URL + API_BASE,
  timeout: 10000,
  params:{},
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: basicAuth(),
  }
};

const CONFIG_OPTION_FLICKR = {
  baseURL: FLICKR_API_ENDPOINT,
  timeout: 10000,
  params:{},
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
};


export const shutterStockVideos = (searchQuery) => {
  const params = {
    query: searchQuery,
    page:1,
    per_page:10
  }

  return UnauthenticatedRequest(CONFIG_OPTION).get({
    url: URL,
    params
  }).then((successfulRes) => {
    return successfulRes.data.data.map(({ id, assets, description }) => ({
      id,
      mediaUrl: assets.preview_mp4.url,
      description
    }));
  });
};

export const flickrImages = (searchQuery) => {
  const params = {
    method:'flickr.photos.search',
    text: searchQuery,
    api_key: FLICKR_API_KEY,
    format: 'json',
    nojsoncallback:'1',
    per_page: '10'
  };

  return UnauthenticatedRequest(CONFIG_OPTION_FLICKR).get({
    url: API_BASE_FLICKR,
    params
  }).then((successfulRes) => {
    return successfulRes.data.photos.photo.map(({ farm, server, id, secret, title }) => ({
      id,
      title,
      mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
    }));
  });
};
