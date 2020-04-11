import { combineReducers } from 'redux';
import authReducer from '../modules/auth';
import categories from '../modules/categories';
import products from '../modules/products';
import users from '../modules/users';

const rootReducer = combineReducers({
    auth: authReducer,
    categories,
    products,
    users,
});

export default rootReducer;
