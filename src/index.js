import React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import createHashHistory from 'history/createHashHistory';
import { ConnectedRouter } from 'react-router-redux';

import './lib';
import routes from './routes';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

const history = createHashHistory();
const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history} children={routes} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
