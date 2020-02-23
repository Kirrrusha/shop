import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

const configureStore = preloadedState => {

    return createStore(
        rootReducer,
        preloadedState,
        composeEnhancers,
    );
};

const store = configureStore({});

export default store;