import React from 'react';
import { Header } from './components';
import { Cart, Home } from './pages';
import { Route, Routes } from 'react-router-dom';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types'
/* №7 30:02 */
function App ({setPizzas, items}) {
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      //setPizzas(data.pizzas)
    })
  })
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={items} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
  )
}

export default App;

/* const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App); */
