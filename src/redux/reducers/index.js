import { combineReducers } from 'redux';
import {connectRouter } from 'connected-react-router';
import authReducer from '../modules/auth';

import {history} from '../history';

const rootReducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
});

export default rootReducer;
