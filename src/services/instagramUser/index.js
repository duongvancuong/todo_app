import { UnauthenticatedRequest } from '../../api';
import config from '../../config';
import { URL_INST_USER } from './constants';

const CONFIG_OPTION = {
  baseURL: config.baseURL,
  timeout: 10000,
  params:{},
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
};

export const getInstgramUser = () => {
  return UnauthenticatedRequest(CONFIG_OPTION).get({
    url: URL_INST_USER
  }).then((res) => {
    return res.data;
  }).catch(({response}) => {
    return response.data;
  });
};
