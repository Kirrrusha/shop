import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import {push} from 'connected-react-router';
import {isEmpty} from 'lodash';

const ActionTypesUser = {
  FETCH_USER_REQUEST: 'FETCH_USER_REQUEST',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE: 'FETCH_USER_FAILURE',
};


const initialState = {
  isAuthenticated: false,
  user: null,
  errors: null
};

export default function (state = initialState, action) {
  const {FETCH_USER_SUCCESS, FETCH_USER_FAILURE} = ActionTypesUser;
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        errors: action.errors
      };
    default:
      return state;
  }
}

// register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('api/users/register', userData)
    .then(({data: user}) => push('/login'))
    .catch(e => {
      dispatch({
        type: ActionTypesUser.FETCH_USER_FAILURE,
        payload: e.response.data
      });
    });
};

// Login - get user token
export const loginUser = (userData) => dispatch => {

  axios.post('api/users/login', userData)
    .then(({data}) => {
      // save to local storage
      const {token} = data;
      localStorage.setItem('jwtToken', token);
      // set token to auth header
      setAuthToken(token);
      // decode token to get user data
      const decoded = jwt_decode(token);
      // set current user
      dispatch(setCurrentUser(decoded));

    })
    .catch(e => dispatch({type: ActionTypesUser.FETCH_USER_FAILURE, payload: e.response.data}));
};

// set current user
export const setCurrentUser = (decoded) => ({
  type: ActionTypesUser.FETCH_USER_SUCCESS,
  payload: decoded
});

// log user out

export const logoutUser = () => dispatch => {
  // remove token form local storage
  localStorage.removeItem('jwtToken');
  // remove auth header
  setAuthToken(false);
  // set current user to {} and isAuthenticated to false
  dispatch(setCurrentUser(null));
};
