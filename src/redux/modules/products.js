import axios from 'axios';
import {API_HTTP} from '../../configs/environment';
import {createSelector} from 'reselect';

const ActionTypesProducts = {
  GET_PRODUCTS_REQUEST: 'GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE: 'GET_PRODUCTS_FAILURE',
};

const initialProductsState = {
  list: [],
  pending: {
    productsList: null,
  },
  errors: null
};


export default function (state = initialProductsState, action) {
  const {
    GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE,
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

//selectors
const selectProducts = state => state.products.list;
const selectProductId = (state, itemId) => itemId;

export const selectProductsByCategoryId = createSelector(
  [selectProducts, selectProductId],
  (products, productId) => products.find(product => product.status && product.productId === +productId)
);

export const selectShortProductList = createSelector(selectProducts,
  (products) => products.map(({name, updatedAt, status, id, productId}) =>
    ({name, updatedAt, status, id, productId})
  )
)
