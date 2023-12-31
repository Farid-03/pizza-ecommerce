import React from 'react';
import { Header } from './components';
import { Cart, Home } from './pages';
import { Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types'
function App () {
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
  )
}

export default App;




