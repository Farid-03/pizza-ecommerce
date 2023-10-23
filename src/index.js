import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './scss/app.scss';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux'

/* store.dispatch({
  type: 'SET_SORT_BY',
  payload: 'price'
}); */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <React.Fragment>
        <Provider store={store}>
        <App/>
        </Provider>
      </React.Fragment>
    </BrowserRouter>
);






