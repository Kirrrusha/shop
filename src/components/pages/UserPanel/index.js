import React from 'react';
import {Redirect, Route, BrowserRouter as Router} from 'react-router-dom';
import History from './History';
import Contact from './Contact';
import ShowRoom from './ShowRoom';
import Home from './Home';
import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer';
import Cart from './Cart';
import Product from './Product';
import Products from '../UserPanel/Products/index';
import Accounts from './FooterLinks/Accounts';
import Delivery from './FooterLinks/Delivery';
import Sales from './FooterLinks/Sales';
import Careers from './FooterLinks/Careers';
import Customer from './FooterLinks/Customer';
import Returns from './FooterLinks/Returns';
import RegistrationForm from '../../modules/AuthForm/RegistrationForm'
import Error404 from '../../modules/Error404';

const UserPanel = () => {
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/history" component={History}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/product/:alias" component={Product}/>
      <Route path="/products" component={Products}/>
      <Route path="/show-room" component={ShowRoom}/>
      <Route path="/cart" component={Cart} />
      <Route path="/architect-accounts" component={Accounts} />
      <Route path="/sales-terms" component={Sales} />
      <Route path="/customer-care" component={Customer} />
      <Route path="/delivery" component={Delivery} />
      <Route path="/careers" component={Careers} />
      <Route path="/exchanges-returns" component={Returns} />
      <Route path="/registration" component={RegistrationForm} />
      <Route path="/error" component={Error404}/>
      <Redirect from="*" to="/error" />
      <Footer/>
    </Router>
  );
};

export default UserPanel;
