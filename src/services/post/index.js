import { SubmissionError } from 'redux-form';

import { AutheticatedRequest } from '../../api';
import config from '../../config';
import { URI_GET_CATEGORIES } from './constants';

const CONFIG_OPTION = {
  baseURL: config.baseURL,
  timeout: 10000,
  params:{},
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
};

export const getCategories = () => {
  return AutheticatedRequest(CONFIG_OPTION).get({
    url: URI_GET_CATEGORIES,
  }).then((res) => {
    return res.data;
  }).catch((error) => {
    throw new SubmissionError(error.data)
  });
};
