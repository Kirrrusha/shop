import axios from 'axios';
import {API_HTTP} from '../../configs/environment';
import {createSelector} from 'reselect';

const ActionTypesProducts = {
    GET_PRODUCTS_REQUEST: 'PRODUCTS_BY_CATEGORY_REQUEST',
    GET_PRODUCTS_SUCCESS: 'PRODUCTS_BY_CATEGORY_SUCCESS',
    GET_PRODUCTS_FAILURE: 'PRODUCTS_BY_CATEGORY_FAILURE'
  };
  
  const initialProductsState = {
    list: [],
    pending: {
      productsList: false
    },
    errors: null,
  };
  export default function (state = initialProductsState, action) {
    const {GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE} = ActionTypesProducts;
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
  };
    export const getAllProducts = () => dispatch => {
      dispatch({
        type: ActionTypesProducts.GET_PRODUCTS_REQUEST
      });
    
      axios
        .get(`${API_HTTP}/api/v1/products`)
        //.get('https://sleepy-oasis-78295.herokuapp.com/api/v1/products')   
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

  export const selectProductsByProductId = createSelector(
    [selectProducts, selectProductId],
    (products, productId) => products.find(product => product.status && product.productId === +productId)
  );

  export const selectShortProductList = createSelector(selectProducts,
    (products) => products.map(({name, updatedAt, status, id, productId}) =>
      ({name, updatedAt, status, id, productId})
    )
  )
  export const selectProductsByCategoryId = createSelector(selectProducts,
    (products,categoryId ) =>
      products.filter( product => product.status && product.categories.some((category) => category.id === +categoryId ))   
  );