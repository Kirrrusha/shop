import { combineReducers } from 'redux';
import {connectRouter } from 'connected-react-router';
import authReducer from '../modules/auth';
import categories from '../modules/categories';
import products from '../modules/products';


import {history} from '../history';

const rootReducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    categories,
    products,
});

export default rootReducer;
