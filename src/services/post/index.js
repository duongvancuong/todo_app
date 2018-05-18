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

export const getCategories = (token) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: token,
  }
  const CONFIG_OPTION_AUTHENTICATION = {...CONFIG_OPTION, headers}
  return AutheticatedRequest(CONFIG_OPTION_AUTHENTICATION).get({
    url: URI_GET_CATEGORIES,
  }).then((res) => {
    return res.data;
  }).catch(({response}) => {
    throw new SubmissionError({
      _error: response.data.error_code
    })
  });
};
