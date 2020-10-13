import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';

import store from '../Store/store.js';
import './index.css';
import App from './App.jsx';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);