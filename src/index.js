import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import App from './App';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './ticketsState';
import addReducer from './components/addState';

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    add: addReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
