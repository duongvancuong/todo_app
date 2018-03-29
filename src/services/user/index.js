import { UnauthenticatedRequest, AutheticatedRequest } from '../../api';
import config from '../../config';
import { URL_LOGIN, URL_REGISTER, URL_LOGOUT } from './constants';

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

export const logout = (token) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: token,
  }
  const CONFIG_OPTION_AUTHENTICATION = {...CONFIG_OPTION, headers}
  return AutheticatedRequest(CONFIG_OPTION_AUTHENTICATION).delete({
    url: URL_LOGOUT
  }).then((res)=>{
    return res.data;
  });
};
