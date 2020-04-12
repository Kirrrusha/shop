import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleWares = [
  thunk,
];

const composeEnhancers = composeWithDevTools(
  applyMiddleware(...middleWares)
);

const configureStore = () => {

  return createStore(
    rootReducer,
    composeEnhancers
  );
};

const store = configureStore();

export default store;
