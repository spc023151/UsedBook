import React from 'react';
import NavHeader from './content/navBlock/NavHeader';
import HeaderSearch from './content/headerSearchBlock/HeaderSearch';
import Header from './content/headerBlock/Header';
import Footer from './content/footerBlock/footer';
import HomePage from './content/headerBlock/HomePage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './content/navBlock/Login';
import Personal from './content/navBlock/Personal';
import CustomerService from './content/navBlock/CustomerService';
import Register from './content/navBlock/Register';
import Shop from './content/headerBlock/Shop';
import NewBook from './content/headerBlock/NewBook';
import Auction from './content/headerBlock/Auction';
import Community from './content/headerBlock/Community';


function App() {
  return (
    <Router>
    <div>
        <NavHeader />
        <HeaderSearch></HeaderSearch>
        <Header></Header>

        <Route exact path="/" component={HomePage} />
        <Route exact path="/customer-service" component={CustomerService} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/personal" component={Personal} />

        <Route exact path="/shop" component={Shop} />
        <Route exact path="/newBook" component={NewBook} />
        <Route exact path="/auction" component={Auction} />
        <Route exact path="/community" component={Community} />

        <Footer></Footer>

    </div>
    </Router>
  );
}

export default App;
