import axios from 'axios';
import {API_HTTP} from '../../configs/environment';
import transitions from '@material-ui/core/styles/transitions';

const ActionTypesCategory = {
  CATEGORY_REQUEST: 'CATEGORY_REQUEST',
  CATEGORY_SUCCESS: 'CATEGORY_SUCCESS',
  CATEGORY_FAILURE: 'CATEGORY_FAILURE'
};

const initialCategoriesState = {
  list: [],
  pending: {
    categoryList: false
  },
  errors: null
};

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

export const getCategories = () => dispatch => {
  dispatch({
    type: ActionTypesCategory.CATEGORY_REQUEST
  });

  axios
    .get(`${API_HTTP}/categories`)
    .then(({data}) => dispatch({
      type: ActionTypesCategory.CATEGORY_SUCCESS,
      payload: data
    }))
    .catch((errors) =>
      dispatch({
        type: ActionTypesCategory.CATEGORY_FAILURE,
        errors
      }));
};
