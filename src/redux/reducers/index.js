import { combineReducers } from 'redux';
import authReducer from '../modules/auth';
import categories from '../modules/categories';
import products from '../modules/products';
import users from '../modules/users';
import checkout from '../modules/checkout';

const rootReducer = combineReducers({
    auth: authReducer,
    checkout,
    categories,
    products,
    users,
});

export default rootReducer;
