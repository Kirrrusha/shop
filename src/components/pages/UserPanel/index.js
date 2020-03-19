import React from 'react';
import {Route} from 'react-router-dom';
import History from './History';
import Contact from './Contact';
import ShowRoom from './ShowRoom';
import Home from './Home';
import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer';
import Cart from './Cart';
import Product from './Product';
import Products from './Products';

const UserPanel = () => {
  return (
    <>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/history" component={History}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/product/:alias" component={Product}/>
      <Route path="/products" component={Products}/>
      <Route path="/show-room" component={ShowRoom}/>
      <Route path="/cart" component={Cart} />
      <Footer/>
    </>
  );
};

export default UserPanel;
