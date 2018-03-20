import React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <Router children={routes} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
