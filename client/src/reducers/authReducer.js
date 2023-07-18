import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR
} from '../actions/types'

// Auth state
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isAdmin: false,
  loading: true,
  user: null,
  errors: {}
}

// Reducer
export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case USER_LOADED:
      console.log('USER_LOADED')
      console.log(action.payload)
      console.log(state)
        return {
        ...state,
        isAuthenticated: true,
        isAdmin: action.payload.isAdmin,
        loading: false,
        user: action.payload
      }      
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      // sessionStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isAdmin: action.payload.isAdmin,
        loading: false
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
    case ACCOUNT_DELETED:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isAdmin: false,
        loading: false,
        user: null
      }
    default:
      return state;
  }
}