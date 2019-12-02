import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'
import './index.css'
import * as serviceWorker from './serviceWorker';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
