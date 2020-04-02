import { combineReducers } from 'redux';
import {connectRouter } from 'connected-react-router';
import authReducer from '../modules/auth';
import usersReducer from '../modules/users';

import {history} from '../history';

const rootReducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    users: usersReducer,
});

export default rootReducer;
