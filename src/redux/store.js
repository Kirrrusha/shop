import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {order} from './middlewares/orders';
import {loadState, saveState} from '../utils/loadState';
import {throttle} from 'lodash';

const middleWares = [
  thunk,
  order
];

const composeEnhancers = composeWithDevTools(
  applyMiddleware(...middleWares)
);

const persistedState = loadState();
const initialState = { ...persistedState };

const configureStore = () => {

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers
  );
};

const store = configureStore();

store.subscribe(throttle(() => {
  saveState({
    checkout: {
      ...store.getState().checkout,
      list: store.getState().checkout.list
    }
  });
}, 1000));


export default store;
