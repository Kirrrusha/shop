import axios from 'axios';
import {API_HTTP} from '../../configs/environment';



const ActionTypesCategory = {
  GET_CATEGORIES_REQUEST: 'GET_CATEGORIES_REQUEST',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_FAILURE: 'GET_CATEGORIES_FAILURE',
  EDIT_CATEGORY_REQUEST: 'EDIT_CATEGORY_REQUEST',
  EDIT_CATEGORY_SUCCESS: 'EDIT_CATEGORY_SUCCESS',
  EDIT_CATEGORY_FAILURE: 'EDIT_CATEGORY_FAILURE',
  REMOVE_CATEGORY_REQUEST: 'REMOVE_CATEGORY_REQUEST',
  REMOVE_CATEGORY_SUCCESS: 'REMOVE_CATEGORY_SUCCESS',
  REMOVE_CATEGORY_FAILURE: 'REMOVE_CATEGORY_FAILURE',
  ADD_CATEGORY_REQUEST: 'ADD_CATEGORY_REQUEST',
  ADD_CATEGORY_SUCCESS: 'ADD_CATEGORY_SUCCESS',
  ADD_CATEGORY_FAILURE: 'ADD_CATEGORY_FAILURE',
};

const initialCategoriesState = {
  list: [],
  pending: {
    categoryListPending: false,
    editCategoryPending: false,
    removeCategoryPending: false,
    addCategoryPending: false,
  },
  errors: null,
};

export default function (state = initialCategoriesState, action) {
  const {
    GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE,
    EDIT_CATEGORY_REQUEST, EDIT_CATEGORY_SUCCESS, EDIT_CATEGORY_FAILURE,
    REMOVE_CATEGORY_REQUEST, REMOVE_CATEGORY_SUCCESS, REMOVE_CATEGORY_FAILURE,
    ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, ADD_CATEGORY_FAILURE,
  } = ActionTypesCategory;
  switch (action.type) {

    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        pending: {
          ...state.pending,
          categoryListPending: true
        }
      };

    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        pending: {
          ...state.pending,
          categoryListPending: false
        }
      };
    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        errors: action.errors,
        pending: {
          ...state.pending,
          categoryListPending: false
        }
      };

    case EDIT_CATEGORY_REQUEST:
      return {
        ...state,
        pending: {
          ...state.pending,
          editCategoryPending: true
        }
      };

    case EDIT_CATEGORY_SUCCESS:
    case EDIT_CATEGORY_FAILURE:
      return {
        ...state,
        pending: {
          ...state.pending,
          editCategoryPending: false
        }
      };

    case REMOVE_CATEGORY_REQUEST:
      return {
        ...state,
        pending: {
          ...state.pending,
          removeCategoryPending: true
        }
      };

    case REMOVE_CATEGORY_SUCCESS:
    case REMOVE_CATEGORY_FAILURE:
      return {
        ...state,
        pending: {
          ...state.pending,
          removeCategoryPending: false
        }
      };

    case ADD_CATEGORY_REQUEST:
      return {
        ...state,
        pending: {
          ...state.pending,
          addCategoryPending: true
        }
      };

    case ADD_CATEGORY_SUCCESS:
    case ADD_CATEGORY_FAILURE:
      return {
        ...state,
        pending: {
          ...state.pending,
          addCategoryPending: false
        }
      };

    default:
      return state;
  }
}
export const getAllCategories = (callback = () => null) => dispatch => {
  dispatch({
    type: ActionTypesCategory.GET_CATEGORIES_REQUEST
  });

  axios
   .get(`${API_HTTP}/api/v1/categories`)  
    .then(({data}) => {
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
  callback();
};

export const removeCategory = (id, callback) => dispatch => {
  dispatch({
    type: ActionTypesCategory.REMOVE_CATEGORY_REQUEST
  });
  axios
    .delete(`${API_HTTP}/api/v1/categories?id=${id}`)
    .then(() => {
     dispatch({
      type: ActionTypesCategory.REMOVE_CATEGORY_SUCCESS
    })
  })
    .catch((errors) =>
      dispatch({
        type: ActionTypesCategory.REMOVE_CATEGORY_FAILURE,
        errors
      }))
    .finally(() => {
      dispatch(getAllCategories(callback));
    });
};

export const editCategory = (category, callback) => dispatch => {
  dispatch({
    type: ActionTypesCategory.EDIT_CATEGORY_REQUEST
  });
  axios
    .put(`${API_HTTP}/api/v1/categories`, category)
    .then(() => {
      dispatch({
        type: ActionTypesCategory.EDIT_CATEGORY_SUCCESS
      })
    })
    .catch((errors) =>
      dispatch({
        type: ActionTypesCategory.EDIT_CATEGORY_FAILURE,
        errors
      }))
    .finally(() => {
      dispatch(getAllCategories(callback));
    });
};

export const addCategory = (category, callback) => dispatch => {
  dispatch({
    type: ActionTypesCategory.ADD_CATEGORY_REQUEST
  });
  axios
    .post(`${API_HTTP}/api/v1/categories`, category)
    .then(() => {
      dispatch({
        type: ActionTypesCategory.ADD_CATEGORY_SUCCESS
      })
    })
    .catch((errors) =>
      dispatch({
        type: ActionTypesCategory.ADD_CATEGORY_FAILURE,
        errors
      }))
    .finally(() => {
      dispatch(getAllCategories(callback));
    });
};
 
  

