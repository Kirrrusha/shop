import axios from 'axios';
import {API_HTTP} from '../../configs/environment';
//import transitions from '@material-ui/core/styles/transitions';

//задаем Actions для категорий
const ActionTypesCategory = {
  CATEGORY_REQUEST: 'CATEGORY_REQUEST',
  CATEGORY_SUCCESS: 'CATEGORY_SUCCESS',
  CATEGORY_FAILURE: 'CATEGORY_FAILURE'
};
//начальное состояние 
const initialCategoriesState = {
  list: [],
  pending: {
    categoryList: false
  },
  errors: null
};
//reducer
export default function (state = initialCategoriesState, action) {
  const {CATEGORY_SUCCESS, CATEGORY_FAILURE, CATEGORY_REQUEST} = ActionTypesCategory;
  switch (action.type) {

    case CATEGORY_REQUEST:
      return {
        ...state,
        pending: {
          ...state.pending,
          categoryList: true
        }
      };

    case CATEGORY_SUCCESS:
      return {
        ...state,
        list: action.payload,
        pending: {
          ...state.pending,
          categoryList: false
        }
      };
    case CATEGORY_FAILURE:
      return {
        ...state,
        errors: action.errors,
        pending: {
          ...state.pending,
          categoryList: false
        }
      };
    default:
      return state;
  }
}
//get запрос
export const getCategories = () => dispatch => {
  dispatch({
    type: ActionTypesCategory.CATEGORY_REQUEST
  });

  axios
    .get(`${API_HTTP}/categories`)
    .then(({data}) => { 
      data.forEach((category) => category.title = category.name);
     dispatch({
      type: ActionTypesCategory.CATEGORY_SUCCESS,
      payload: data      
    })    
  })
    .catch((errors) =>
      dispatch({
        type: ActionTypesCategory.CATEGORY_FAILURE,
        errors
      }));     
};
