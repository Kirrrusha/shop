import axios from 'axios';
import {API_HTTP} from '../../configs/environment';

export const ActionTypesCheckout = {
  ADD_PRODUCT_IN_ORDER: 'ADD_PRODUCT_IN_ORDER',
  REMOVE_PRODUCT_IN_ORDER: 'REMOVE_PRODUCT_IN_ORDER',
  CHECKOUT_REQUEST: 'CHECKOUT_REQUEST',
  CHECKOUT_SUCCESS: 'CHECKOUT_SUCCESS',
  CHECKOUT_FAILURE: 'CHECKOUT_FAILURE',
  CLEAR_CHECKOUT: 'CLEAR_CHECKOUT',
};

const initialCheckoutState = {
  list: [],
  pending: {
    checkout: null,
  },
  errors: null
};

export default function (state = initialCheckoutState, action) {
  const {
    CHECKOUT_REQUEST, CHECKOUT_SUCCESS, CHECKOUT_FAILURE,
    ADD_PRODUCT_IN_ORDER, REMOVE_PRODUCT_IN_ORDER, CLEAR_CHECKOUT
  } = ActionTypesCheckout;
  switch (action.type) {

    case CHECKOUT_REQUEST:
      return {
        ...state,
        pending: {
          ...state.pending,
          checkout: true
        }
      };

    case CHECKOUT_SUCCESS:
      return {
        ...state,
        list: action.payload,
        pending: {
          ...state.pending,
          checkout: false
        }
      };
    case CHECKOUT_FAILURE:
      return {
        ...state,
        errors: action.errors,
        pending: {
          ...state.pending,
          checkout: false
        }
      };

    case ADD_PRODUCT_IN_ORDER:
      return {
        ...state,
        list: action.payload
      }

    case REMOVE_PRODUCT_IN_ORDER:
      return {
        ...state,
        list: action.payload
      }

    case CLEAR_CHECKOUT:
      return {
        ...state,
        list: []
      }

    default:
      return state;
  }
}

//actions
export const fetchCheckout = (data) => dispatch => {
  dispatch({
    type: ActionTypesCheckout.CHECKOUT_REQUEST
  });

  axios
    .post(`${API_HTTP}/api/v1/checkout`, data)
    .then(({data: payload}) => {
      dispatch({
        type: ActionTypesCheckout.CHECKOUT_SUCCESS,
        payload
      });
      dispatch({
        type: ActionTypesCheckout.CLEAR_CHECKOUT
      })
    })
    .catch((errors) =>
      dispatch({
        type: ActionTypesCheckout.CHECKOUT_FAILURE,
        errors
      }));
};

export const addProductInOrder = (payload) => dispatch => {
  dispatch({
    type: ActionTypesCheckout.ADD_PRODUCT_IN_ORDER,
    payload
  })
}

export const removeProductInOrder = (payload) => dispatch => {
  dispatch({
    type: ActionTypesCheckout.REMOVE_PRODUCT_IN_ORDER,
    payload
  })
}

