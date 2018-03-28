import { UnauthenticatedRequest } from '../../api';
import config from '../../config';
import { URL_LOGIN, URL_REGISTER } from './constants';

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
    url: URL_LOGIN,
    params
  }).then((res) => {
    return res.data;
  });
};

export const register = (data) => {
  const params = {
    email: data.email,
    name: data.name,
    password: data.password
  }
  return UnauthenticatedRequest(CONFIG_OPTION).post({
    url: URL_REGISTER,
    params
  }).then((res)=>{
    return res.data;
  });
};
