import axios from 'axios';
import {setAlert} from './alertActions';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR
} from './types'

import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async dispatch => {
  console.log('loadUser')
  if(localStorage.token) {
    setAuthToken(localStorage.token);
  }
  console.log(localStorage.token)
  try {
    const res = await axios.get('/api/auth');
    console.log(res.data)
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  }
  catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
  }
}

export const register = (user) => async dispatch => {
  // const user = {name, email, password}
  try {
    const res = await axios.post('/api/users/new', user);
    
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })

    dispatch(loadUser());

    dispatch(setAlert('Registered success', 'success'));
  }
  catch (error) {
    const errors = error.response.data.errors;

    if(errors){
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
}

export const login = (details) => async dispatch => {
  // const details = JSON.stringify({email, password});
  try{
    const res = await axios.post('/api/auth', details);
    console.log(res.data)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());

    dispatch(setAlert('Login success', 'success'))
  }
  catch (error) {
    const errors = error.response.data.errors;
    if(errors){
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
}

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
}