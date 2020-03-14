import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './redux/store';
import history from './constants/history';

import Contact from './Components/Pages/Contact';
import History from './Components/Pages/History';
import Home from './Components/Pages/Home';
import Product from './Components/Pages/Product';
import Products from './Components/Pages/Products';
import ShowRoom from './Components/Pages/ShowRoom';
import Cart from './Blocks/Cart/Cart';

import Header from './Blocks/Header/Header';
import Footer from './Blocks/Footer/Footer';
import Mobile from './Blocks/Mobile/Mobile';

import './assets/css/App.scss';

class App extends Component {
    render(){
        return (
            <div className="wrapper">
              <Provider store={store}>
                <Header />
                    <BrowserRouter history={history}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/history" component={History}/>
                            <Route exact path="/contact" component={Contact}/>
                            <Route exact path="/product" component={Product}/>
                            <Route exact path="/products" component={Products}/>
                            <Route exact path="/show-room" component={ShowRoom}/>
                            <Route exact path="/cart" component={Cart} />
                        </Switch>
                    </BrowserRouter>
                    <Mobile />
                   <Footer />
                </Provider>
            </div>
        );
    }
}

export default App;
