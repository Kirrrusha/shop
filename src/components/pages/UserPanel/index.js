import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import History from './History';
import Contact from './Contact';
import ShowRoom from './ShowRoom';
import Home from './Home';
import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer';
import Cart from './Cart';
import Product from './Product';
import Products from '../UserPanel/Products/index';

const UserPanel = () => {
  return (
    <>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/history" component={History}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/product/:alias" component={Product}/>
      <Route exact path="/products" component={Products}/>
      <Route path="/show-room" component={ShowRoom}/>
      <Route path="/cart" component={Cart} />
      <Redirect to="/"/>
      <Footer/>
    </>
  );
};

export default UserPanel;
