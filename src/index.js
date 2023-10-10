import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import './scss/app.scss';
import App from './App';

/* #4 1:41:18 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/qwe' element={<Header />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
