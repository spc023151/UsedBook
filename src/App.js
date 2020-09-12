import React from 'react';
import Header from './header/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './header/Login'
import ShoppingCart from './header/ShoppingCart'
import Personal from './header/Personal'
import CustomerService from './header/CustomerService'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/login" component={Login} />
        <Route exact path="/shopping-cart" component={ShoppingCart} />
        <Route exact path="/personal" component={Personal} />
        <Route exact path="/customer-service" component={CustomerService} />
      </Router>
    </div>
  );
}

export default App;
