import React, { Component }  from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from './redux/store';

import Contact from './Components/Contact';
import History from './Components/History';
import Home from './Components/Home';
import Product from './Components/Product';
import Products from './Components/Products';
import ShowRoom from './Components/ShowRoom';

import './styles/App.scss';

const history = createBrowserHistory();

class App extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="App">
                <h2>Template</h2>
                <Provider store={store}>
                    <BrowserRouter history={history}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/history" component={History}/>
                            <Route exact path="/contact" component={Contact}/>
                            <Route exact path="/product" component={Product}/>
                            <Route exact path="/products" component={Products}/>
                            <Route exact path="/show-room" component={ShowRoom}/>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
