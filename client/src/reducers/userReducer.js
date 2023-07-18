import {GET_USERS} from '../actions/types';

const initialState = {
  users: [],
  user: {},
  loading: true,
  errors: {}
}

export default function userReducer(state = initialState, action){
  switch(action.type) {
    // Get Users
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    
    default:
      return state;
  }
}