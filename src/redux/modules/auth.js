import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import {history} from '../history';
import {isEmpty} from 'lodash';
import {API_HTTP} from '../../configs/environment';

const ActionTypesUser = {
  FETCH_LOGIN_REQUEST: 'FETCH_LOGIN_REQUEST',
  FETCH_LOGIN_SUCCESS: 'FETCH_LOGIN_SUCCESS',
  FETCH_LOGIN_FAILURE: 'FETCH_LOGIN_FAILURE',
  FETCH_REG_REQUEST: 'FETCH_REG_REQUEST',
  FETCH_REG_SUCCESS: 'FETCH_REG_SUCCESS',
  FETCH_REG_FAILURE: 'FETCH_REG_FAILURE',
};


const initialState = {
  isAuthenticated: null,
  user: null,
  errors: null
};

export default function (state = initialState, action) {
  const {FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE} = ActionTypesUser;
  switch (action.type) {
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case FETCH_LOGIN_FAILURE:
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
export const registerUser = (userData) => dispatch => {
  dispatch(registerUserStarted());

  axios
    .post(`${API_HTTP}/api/v1/users/registration`, userData)
    .then(() => history.push('/login'))
    .catch(e => {
      dispatch({
        type: ActionTypesUser.FETCH_REG_FAILURE,
        payload: e.response.data
      });
    });
};

const registerUserStarted = () => ({
  type: ActionTypesUser.FETCH_LOGIN_REQUEST
});

// Login - get user token
export const loginUser = (userData) => dispatch => {

  axios.post(`${API_HTTP}/api/v1/users/login`, userData)
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
    .catch(e => dispatch({type: ActionTypesUser.FETCH_LOGIN_FAILURE, errors: (e.response && e.response.data) || e }));
};

// set current user
export const setCurrentUser = (decoded) => ({
  type: ActionTypesUser.FETCH_LOGIN_SUCCESS,
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

export const checkUser = () => dispatch => {
  if (localStorage.jwtToken) {
    // set auth token
    setAuthToken(localStorage.jwtToken);
    // decode token
    const decoded = jwt_decode(localStorage.jwtToken);
    // set user and isAuthenticated
    dispatch(setCurrentUser(decoded));
    // check for  expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      dispatch(logoutUser());
      dispatch(history.push('/login'));
    }
  }
}
