import { combineReducers } from 'redux';
import {connectRouter } from 'connected-react-router';
import authReducer from '../modules/auth';
import categories from '../modules/categories';

import {history} from '../history';

const rootReducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    categories,
});

export default rootReducer;
