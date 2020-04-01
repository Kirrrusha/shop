import axios from 'axios';
import {API_HTTP} from '../../configs/environment';

const ActionTypesProductsByCategoryId = {
    PRODUCTS_REQUEST: 'PRODUCTS_BY_CATEGORY_REQUEST',
    PRODUCTS_SUCCESS: 'PRODUCTS_BY_CATEGORY_SUCCESS',
    PRODUCTS_FAILURE: 'PRODUCTS_BY_CATEGORY_FAILURE'
  };
  
  const initialProductsState = {
    list: [],
    pending: {
      productsList: false
    },
    errors: null
  };


  export default function (state = initialProductsState, action) {
    const {PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAILURE} = ActionTypesProductsByCategoryId;
    switch (action.type) {
  
      case PRODUCTS_REQUEST:
        return {
          ...state,
          pending: {
            ...state.pending,
            productsList: true
          }
        };
  
      case PRODUCTS_SUCCESS:
        return {
          ...state,
          list: action.payload,
          pending: {
            ...state.pending,
            productsList: false
          }
        };
      case PRODUCTS_FAILURE:
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
  
  export const getProductsByCategory = (categoryId) => dispatch => {
    dispatch({
      type: ActionTypesProductsByCategoryId.PRODUCTS_REQUEST
    });
  
    axios
      .get(`${API_HTTP}/products/byCategory/${categoryId}`)
      .then(({data}) => { 
        console.log(data)
       dispatch({
        type: ActionTypesProductsByCategoryId.PRODUCTS_SUCCESS,
        payload: data      
      })    
    })
      .catch((errors) =>
        dispatch({
          type: ActionTypesProductsByCategoryId.PRODUCTS_FAILURE,
          errors
        }));     
  };
