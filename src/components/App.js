import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import store from '../redux/store';
import {history} from '../redux/history';
import '../assets/styles/App.scss';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import PrivateRoute from './common/PrivateRoute';
import Header from './modules/Header/Header';
import Home from './pages/UserPanel/Home';
import History from './pages/UserPanel/History';
import Contact from './pages/UserPanel/Contact';
import Product from './pages/UserPanel/Product';
import Products from './pages/UserPanel/Products';
import ShowRoom from './pages/UserPanel/ShowRoom';
import Cart from './pages/UserPanel/Cart';
import Accounts from './pages/UserPanel/FooterLinks/Accounts';
import Sales from './pages/UserPanel/FooterLinks/Sales';
import Customer from './pages/UserPanel/FooterLinks/Customer';
import Delivery from './pages/UserPanel/FooterLinks/Delivery';
import Careers from './pages/UserPanel/FooterLinks/Careers';
import Returns from './pages/UserPanel/FooterLinks/Returns';
import RegistrationForm from './modules/AuthForm/RegistrationForm';
import Footer from './modules/Footer';


const App = () =>
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/admin" component={AdminPanel}/>
        <Route path="/">
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/history" component={History}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/product/:alias" component={Product}/>
          <Route exact path="/products" component={Products}/>
          <Route path="/show-room" component={ShowRoom}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/architect-accounts" component={Accounts}/>
          <Route path="/sales-terms" component={Sales}/>
          <Route path="/customer-care" component={Customer}/>
          <Route path="/delivery" component={Delivery}/>
          <Route path="/careers" component={Careers}/>
          <Route path="/exchanges-returns" component={Returns}/>
          <Route path="/registration" component={RegistrationForm}/>
          <Footer/>
        </Route>
      </Switch>
    </Router>
  </Provider>;

export default App;
