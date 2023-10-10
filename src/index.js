import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import './scss/app.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Fragment>
        <App/>
      </React.Fragment>
    </BrowserRouter>
  </React.StrictMode>
);






