import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Badge from './components/Badge';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Contact from './components/Contact';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
    <div>
    <nav>
    <Link to="/">Produits</Link>
    <Link to="/contact">Contact</Link>
    <Badge count={cart.length} />
  </nav>
  <Switch>
  <Route path="/" exact>
  <ProductList cart={cart} setCart={setCart} />
  <Cart cart={cart} setCart={setCart} />
  </Route>
  <Route path="/contact" component={Contact} />
  </Switch>
  </div>
  </Router>
);
};

export default App;
