// This file holds our states and reducers that deal with services
// File has three sections. Action types, state and reducers

// Action types
import {
  GET_SERVICES,
  GET_SERVICE,
  ADD_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE,
  DEL_ERROR,
  SORT_ASC,
  SORT_DESC,
  SORT_ERROR
} from '../actions/types';

// Service state
const initialState = {
  services: [],
  service: {},
  errors: {},
  loading: true
}

// Reducer
export default function serviceReducer(state = initialState, action) {
  switch(action.type) {
    case GET_SERVICES:
      return{
        ...state,
        services: action.payload,
        loading: false
      }
    case SORT_ASC:
      return{
        ...state,
        services: action.payload,
        loading: false
      }
    case SORT_DESC:
      return{
        ...state,
        services: action.payload,
        loading: false
      }
    case SORT_ERROR:
      return{
        ...state,
        errors: action.payload,
        loading: false
      }
    case GET_SERVICE:
      return{
        ...state,
        service: action.payload,
        loading: false
      }
    case ADD_SERVICE:
      return{
        ...state,
        services: [action.payload, ...state.services],
        service: action.payload,
        loading: false
      }
    case DELETE_SERVICE:
      return{
        ...state,
        services: state.services.filter(
          service => service.S_id !== action.payload
        ),
        loading: false
      }
    case UPDATE_SERVICE:
      return{
        ...state,
        services: state.services.map(service =>
          service.id === action.payload.id ?
          (service = action.payload) : service),
        service: action.payload,
        loading: false
      }
    case DEL_ERROR:
      return{
        ...state,
        errors: action.payload,
        loading: false
      }
    default:
      return state;
  }
}