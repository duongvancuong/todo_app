import { UnauthenticatedRequest } from '../../api';
import config from '../config';
import { URL } from './constants';

const CONFIG_OPTION = {
  baseURL: config.baseURL,
  timeout: 10000,
  params:{},
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: basicAuth(),
  }
};

export const login = (data) => {
  params = {
    email: data.email,
    password: data,email
  }

  return UnauthenticatedRequest(CONFIG_OPTION).post({
    url: URL,
    params
  }).then((res) => {
    return res.data;
  });
};
