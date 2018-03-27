import { UnauthenticatedRequest } from '../../api';
import config from '../../config';
import { URL } from './constants';

const CONFIG_OPTION = {
  baseURL: config.baseURL,
  timeout: 10000,
  params:{},
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
};

export const login = (data) => {
  const params = {
    email: data.email,
    password: data.password
  }

  return UnauthenticatedRequest(CONFIG_OPTION).post({
    url: URL,
    params
  }).then((res) => {
    return res.data;
  });
};
