import {ActionTypesCheckout} from '../modules/checkout';

export const order = ({getState}) => next => action => {
  if (action.type === ActionTypesCheckout.REMOVE_PRODUCT_IN_ORDER) {
    const {checkout: {list}} = getState();
    const payload = list.filter(product => product.id !== action.payload.id);
    localStorage.setItem('order', JSON.stringify(payload));
    return next({
      ...action,
      payload
    })
  }

  if (action.type === ActionTypesCheckout.ADD_PRODUCT_IN_ORDER) {
    const {checkout: {list}} = getState();
    const payload = [...list, action.payload];
    localStorage.setItem('order', JSON.stringify(payload));
    return next({
      ...action,
      payload
    })
  }
  return next(action);
}
