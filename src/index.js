import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { setupListeners } from '@reduxjs/toolkit/query';
import { Provider } from 'react-redux';
import { store } from './redux/store';

setupListeners(store.dispatch);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
