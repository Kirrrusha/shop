import axios from 'axios';
import {API_HTTP} from '../../configs/environment';
import {createSelector} from 'reselect';

const ActionTypesProducts = {
  GET_PRODUCTS_REQUEST: 'GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE: 'GET_PRODUCTS_FAILURE',
  EDIT_PRODUCTS_REQUEST: 'EDIT_PRODUCTS_REQUEST',
  EDIT_PRODUCTS_SUCCESS: 'EDIT_PRODUCTS_SUCCESS',
  EDIT_PRODUCTS_FAILURE: 'EDIT_PRODUCTS_FAILURE',
  REMOVE_PRODUCTS_REQUEST: 'REMOVE_PRODUCTS_REQUEST',
  REMOVE_PRODUCTS_SUCCESS: 'REMOVE_PRODUCTS_SUCCESS',
  REMOVE_PRODUCTS_FAILURE: 'REMOVE_PRODUCTS_FAILURE',
  ADD_PRODUCTS_REQUEST: 'ADD_PRODUCTS_REQUEST',
  ADD_PRODUCTS_SUCCESS: 'ADD_PRODUCTS_SUCCESS',
  ADD_PRODUCTS_FAILURE: 'ADD_PRODUCTS_FAILURE'
};

const initialProductsState = {
  list: [],
  pending: {
    productsList: false,
    editProductsList: false,
    removeProductsList: false,
    addProductsList: false
  },
  errors: null
};


export default function (state = initialProductsState, action) {
  const {
    GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE,
    EDIT_PRODUCTS_REQUEST, EDIT_PRODUCTS_SUCCESS, EDIT_PRODUCTS_FAILURE,
    REMOVE_PRODUCTS_REQUEST, REMOVE_PRODUCTS_SUCCESS, REMOVE_PRODUCTS_FAILURE,
    ADD_PRODUCTS_REQUEST, ADD_PRODUCTS_SUCCESS, ADD_PRODUCTS_FAILURE
  } = ActionTypesProducts;
  switch (action.type) {

    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        pending: {
          ...state.pending,
          productsList: true
        }
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        pending: {
          ...state.pending,
          productsList: false
        }
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        errors: action.errors,
        pending: {
          ...state.pending,
          productsList: false
        }
      };

    case EDIT_PRODUCTS_REQUEST:
      return {
        ...state,
        pending: {
          ...state.pending,
          editProductsList: true
        }
      };

    case EDIT_PRODUCTS_SUCCESS:
    case EDIT_PRODUCTS_FAILURE:
      return {
        ...state,
        pending: {
          ...state.pending,
          editProductsList: false
        }
      };

    case REMOVE_PRODUCTS_REQUEST:
      return {
        ...state,
        pending: {
          ...state.pending,
          removeProductsList: true
        }
      };

    case REMOVE_PRODUCTS_SUCCESS:
    case REMOVE_PRODUCTS_FAILURE:
      return {
        ...state,
        pending: {
          ...state.pending,
          removeProductsList: false
        }
      };

    case ADD_PRODUCTS_REQUEST:
      return {
        ...state,
        pending: {
          ...state.pending,
          addProductsList: true
        }
      };

    case ADD_PRODUCTS_SUCCESS:
    case ADD_PRODUCTS_FAILURE:
      return {
        ...state,
        pending: {
          ...state.pending,
          addProductsList: false
        }
      };
    default:
      return state;
  }
}

//actions
export const getAllProducts = () => dispatch => {
  dispatch({
    type: ActionTypesProducts.GET_PRODUCTS_REQUEST
  });

  axios
    .get(`${API_HTTP}/api/v1/products`)
    .then(({data}) => {
      dispatch({
        type: ActionTypesProducts.GET_PRODUCTS_SUCCESS,
        payload: data
      });
    })
    .catch((errors) =>
      dispatch({
        type: ActionTypesProducts.GET_PRODUCTS_FAILURE,
        errors
      }));
};


export const removeProduct = (id, callback) => dispatch => {
  dispatch({
    type: ActionTypesProducts.REMOVE_PRODUCTS_REQUEST
  });
  axios
    .delete(`${API_HTTP}/api/v1/products?id=${id}`)
    .then(() => {
      dispatch({
        type: ActionTypesProducts.REMOVE_PRODUCTS_SUCCESS
      })
    })
    .catch((errors) =>
      dispatch({
        type: ActionTypesProducts.REMOVE_PRODUCTS_FAILURE,
        errors
      }))
    .finally(() => {
      dispatch(getAllProducts(callback));
    });
};

export const editProduct = (product, callback) => dispatch => {
  dispatch({
    type: ActionTypesProducts.EDIT_PRODUCTS_REQUEST
  });
  axios
    .put(`${API_HTTP}/api/v1/products`, product)
    .then(() => {
      dispatch({
        type: ActionTypesProducts.EDIT_PRODUCTS_SUCCESS
      })
    })
    .catch((errors) =>
      dispatch({
        type: ActionTypesProducts.EDIT_PRODUCTS_FAILURE,
        errors
      }))
    .finally(() => {
      dispatch(getAllProducts(callback));
    });
};

export const addProduct = (product, callback) => dispatch => {
  dispatch({
    type: ActionTypesProducts.ADD_PRODUCTS_REQUEST
  });
  axios
    .post(`${API_HTTP}/api/v1/products`, product)
    .then(() => {
      dispatch({
        type: ActionTypesProducts.ADD_PRODUCTS_SUCCESS
      })
    })
    .catch((errors) =>
      dispatch({
        type: ActionTypesProducts.ADD_PRODUCTS_FAILURE,
        errors
      }))
    .finally(() => {
      dispatch(getAllProducts(callback));
    });
};

//selectors
const selectProducts = state => state.products.list;
const selectProductId = (state, itemId) => itemId;

const selectProductsByCategoryId = createSelector(
  [selectProducts, selectProductId],
  (products, productId) => products.filter(product => product.productId === productId)
);

