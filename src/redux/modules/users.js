import axios from 'axios';
import {API_HTTP} from '../../configs/environment';
const ActionTypesUsers = {
    FETCH_USERS_REQUEST: 'ADMIN/FETCH_USERS_REQUEST',
    FETCH_USERS_SUCCESS: 'ADMIN/FETCH_USERS_SUCCESS',
    FETCH_USERS_FAILURE: 'ADMIN/FETCH_USERS_FAILURE',
    CHANGE_USER_REQUEST: 'ADMIN/CHANGE_USER_REQUEST',
    CHANGE_USER_SUCCESS: 'ADMIN/CHANGE_USER_SUCCESS',
    CHANGE_USER_FAILURE: 'ADMIN/CHANGE_USER_FAILURE',
    DELETE_USER_REQUEST: 'ADMIN/DELETE_USERS_REQUEST',
    DELETE_USER_SUCCESS: 'ADMIN/DELETE_USERS_SUCCESS',
    DELETE_USER_FAILURE: 'ADMIN/DELETE_USERS_FAILURE',
}

const initialState = {
    list: [],
    error: {}
}

export default function (state = initialState, action) {
    const {
        FETCH_USERS_SUCCESS,
        FETCH_USERS_FAILURE,
        CHANGE_USER_SUCCESS,
        CHANGE_USER_FAILURE,
        DELETE_USERS_SUCCESS,
        DELETE_USERS_FAILURE
    } = ActionTypesUsers
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                list: action.payload
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case CHANGE_USER_SUCCESS:
            return {
                ...state,
                message: action.payload
            };
        case CHANGE_USER_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case DELETE_USERS_SUCCESS:
            return {
                ...state,
                message: action.payload
            };
        case DELETE_USERS_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
}

// get all users
export const getAllUsers = () => dispatch => {
    dispatch(fetchingUsersStarted());
  
    axios
      .get(`${API_HTTP}/api/v1/users`)
      .then((response) => {
          dispatch({
            type: ActionTypesUsers.FETCH_USERS_SUCCESS,
            payload: response.data
          });
      })
      .catch(e => {
        dispatch({
          type: ActionTypesUsers.FETCH_USERS_FAILURE,
          payload: e.data
        });
      });
};

const fetchingUsersStarted = () => ({
    type: ActionTypesUsers.FETCH_USERS_REQUEST
});

export const updateUser = (user) => dispatch => {
    dispatch(updatingUserStarted());
    axios
      .put(`${API_HTTP}/api/v1/users`, user)
      .then(() => {
          dispatch({
            type: ActionTypesUsers.CHANGE_USER_SUCCESS,
            payload: `User ${user.username} updated successfully!`
          });
      })
      .catch(e => {
        dispatch({
          type: ActionTypesUsers.CHANGE_USER_FAILURE,
          payload: e.data
        });
      })
      .finally(() => {
        dispatch(getAllUsers());
      });
};

const updatingUserStarted = () => ({
    type: ActionTypesUsers.CHANGE_USER_REQUEST
});

export const deleteUser = (user) => dispatch => {
    dispatch(deletingUserStarted());
    axios
      .delete(`${API_HTTP}/api/v1/users`, {data: {id: user.id}})
      .then(() => {
          dispatch({
            type: ActionTypesUsers.DELETE_USER_SUCCESS,
            payload: `User ${user.username} deleted successfully!`
          });
      })
      .catch(e => {
        dispatch({
          type: ActionTypesUsers.DELETE_USER_FAILURE,
          payload: e.data
        });
      })
      .finally(() => {
        dispatch(getAllUsers());
      });
};

const deletingUserStarted = () => ({
    type: ActionTypesUsers.DELETE_USER_REQUEST
});