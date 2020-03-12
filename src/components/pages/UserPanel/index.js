import React from 'react';
import {Route} from 'react-router-dom';
import History from './History';
import Contact from './Contact';
import Product from './Product';
import Products from './Products';
import ShowRoom from './ShowRoom';
import Home from './Home';
import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer/Footer';

export default () => {
  return (
    <>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/history" component={History}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/product" component={Product}/>
      <Route path="/products" component={Products}/>
      <Route path="/show-room" component={ShowRoom}/>
      <Footer/>
    </>
  );
};
