import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import history from '../constants/history';
import rootReducer from './reducers/root';

const composeEnhancers = composeWithDevTools(
    applyMiddleware(
        routerMiddleware(history),
        thunk
    )
);

const configureStore = preloadedState => {

    return createStore(
        rootReducer,
        preloadedState,
        composeEnhancers,
    );
};

const store = configureStore({});

export default store;