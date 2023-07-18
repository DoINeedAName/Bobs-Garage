import {
  GET_REVIEWS,
  GET_REVIEWS_FAILED,
  GET_REVIEW,
  GET_REVIEW_FAILED,
  ADD_REVIEW,
  ADD_REVIEW_FAILED,
  DELETE_REVIEW,
  DELETE_ERROR
} from '../actions/types';

const initialState = {
  reviews: [],
  review: {},
  errors: {},
  loading: true
}

export default function reviewReducer(state = initialState, action) {
  switch(action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        loading: false
      }
      case GET_REVIEWS_FAILED:
        return {
          ...state,
          errors: action.payload,
          loading: false
        }
      case GET_REVIEW:
        return {
          ...state,
          review: action.payload,
          loading: false
        }
      case GET_REVIEW_FAILED:
        return {
          ...state,
          errors: action.payload,
          loading: false
        }
      case ADD_REVIEW:
        return {
          ...state,
          reviews: [action.payload, ...state.reviews],
          review: action.payload,
          loading: false
        }
      case ADD_REVIEW_FAILED:
        return {
          ...state,
          errors: action.payload,
          loading: false
        }
      case DELETE_REVIEW:
        return{
          ...state,
          reviews: state.reviews.filter(
            review => review.R_id !== action.payload
          ),
          loading: false
        }
      case DELETE_ERROR:
        return {
          ...state,
          errors: action.paylaod,
          loading: false
        }
      default: 
        return state;
  }
}