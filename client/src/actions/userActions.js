import {GET_USERS} from './types';
import axios from 'axios';
import {setAlert} from './alertActions';

// Get all users
export const getUsers = () => async dispatch => {
  console.log('GetUsers');

  try {
    const res = await axios.get('/api/users');
    console.log(res.data);
    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  }
  catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.foreach(error => dispatch(setAlert(error.msg, 'danger ')));
    }
  }
};

export const deleteUser = id => async dispatch => {
  console.log("Delete User");
}

