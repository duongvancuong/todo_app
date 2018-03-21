import React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import routes from './routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import createHashHistory from 'history/createHashHistory';

const history = createHashHistory();
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={history} children={routes} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
