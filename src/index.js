import 'babel-core/polyfill';
import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';

const store = configureStore();

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root')
);
