import React from 'react';
import { Header } from './components';
import { Cart, Home } from './pages';
import { Route, Routes } from 'react-router-dom';
function App() {
  const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((data) => {
        setPizzas(data.pizzas);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={pizzas} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
