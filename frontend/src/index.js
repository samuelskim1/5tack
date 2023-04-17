import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import configureStore from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';


let store = configureStore({});
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
