import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import home from './home';
import products from './products';
import product from './product';
import history from './history';
import showroom from './showroom';
import contact from './contact';

const rootReducer = combineReducers({
    routing: routerReducer,
    home,
    products,
    product,
    history,
    showroom,
    contact,
});

export default rootReducer;
