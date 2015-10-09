import 'babel-core/polyfill';
import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';

const store = configureStore();

React.render(
  <div>
    <Provider store={store}>
      {() => <App />}
    </Provider>
  </div>,
  document.getElementById('root')
);
