import axios from 'axios';
import {API_HTTP} from '../../configs/environment';
//import transitions from '@material-ui/core/styles/transitions';


const ActionTypesCategory = {
  GET_CATEGORIES_REQUEST: 'GET_CATEGORIES_REQUEST',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_FAILURE: 'GET_CATEGORIES_FAILURE',
  EDIT_CATEGORY_REQUEST: 'EDIT_CATEGORY_REQUEST',
  EDIT_CATEGORY_SUCCESS: 'EDIT_CATEGORY_SUCCESS',
  EDIT_CATEGORY_FAILURE: 'EDIT_CATEGORY_FAILURE',
};

const initialCategoriesState = {
  list: [],
  pending: {
    categoryList: false,
    editCategory: false,
  },
  errors: null,
};

export default function (state = initialCategoriesState, action) {
  const {
    GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE,
    EDIT_CATEGORY_REQUEST, EDIT_CATEGORY_SUCCESS, EDIT_CATEGORY_FAILURE
  } = ActionTypesCategory;
  switch (action.type) {

    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        pending: {
          ...state.pending,
          categoryList: true
        }
      };

    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        pending: {
          ...state.pending,
          categoryList: false
        }
      };
    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        errors: action.errors,
        pending: {
          ...state.pending,
          categoryList: false
        }
      };

    case EDIT_CATEGORY_REQUEST:
      return {
        ...state,
        pending: {
          ...state.pending,
          editCategory: true
        }
      };

    case EDIT_CATEGORY_SUCCESS:
    case EDIT_CATEGORY_FAILURE:
      return {
        ...state,
        pending: {
          ...state.pending,
          editCategory: false
        }
      };

    default:
      return state;
  }
}

export const getCategories = () => dispatch => {
  dispatch({
    type: ActionTypesCategory.GET_CATEGORIES_REQUEST
  });

  axios
    .get(`${API_HTTP}/api/v1/categories`)
    .then(({data}) => {
      data.forEach((category) => category.title = category.name);
     dispatch({
      type: ActionTypesCategory.GET_CATEGORIES_SUCCESS,
      payload: data
    })
  })
    .catch((errors) =>
      dispatch({
        type: ActionTypesCategory.GET_CATEGORIES_FAILURE,
        errors
      }));
};

export const editCategory = () => dispatch => {
  dispatch({
    type: ActionTypesCategory.EDIT_CATEGORY_REQUEST
  });

  // axios
  //   .get(`${API_HTTP}/api/v1/categories`)
  //   .then(({data}) => {
  //     data.forEach((category) => category.title = category.name);
  //    dispatch({
  //     type: ActionTypesCategory.GET_CATEGORIES_SUCCESS,
  //     payload: data
  //   })
  // })
  //   .catch((errors) =>
  //     dispatch({
  //       type: ActionTypesCategory.GET_CATEGORIES_FAILURE,
  //       errors
  //     }));
};
