import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Basket from './pages/Basket';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import ErrorPage from './pages/ErrorPage';
import Modal from './components/Modal';

import './css/main.css';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Basket} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route path="*" component={ErrorPage} />
      </Switch>
      <Modal />
    </div>
  );
}

export default App;
