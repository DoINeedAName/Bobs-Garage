// Action types
import {
  GET_BLOGS,
  GET_BLOGS_FAILED,
  GET_BLOG,
  GET_BLOG_FAILED,
  ADD_BLOG,
  ADD_BLOG_FAILED,
  UPDATE_BLOG,
  UPDATE_BLOG_FAILED,
  DELETE_BLOG,
  DELETE_BLOG_FAILED
} from '../actions/types';

// Blog state
const initialState = {
  blogs: [],
  blog: {},
  errors: {},
  loading: true
}

// Reducer
export default function blogReducer(state = initialState, action) {
  switch(action.type) {
    case GET_BLOGS:
      return{
        ...state,
        blogs: action.payload,
        loading: false
      }
    case GET_BLOGS_FAILED:
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    case GET_BLOG:
      return {
        ...state,
        blog: action.payload,
        loading: false
      }
    case GET_BLOG_FAILED:
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    case UPDATE_BLOG:
      return {
        ...state,
        blogs: state.blogs.map(blog =>
          blog.id === action.payload.id ?
          (blog = action.payload) : blog
        ),
        blog: action.payload,
        loading: false
      }
    case UPDATE_BLOG_FAILED:
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    case ADD_BLOG:
      return {
        ...state,
        blogs: [action.payload, ...state.blogs],
        blog: action.payload,
        loading: false
      }
    case ADD_BLOG_FAILED:
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter(
          blog => blog.B_id !== action.payload
        ),
        loading: false
      }
      case DELETE_BLOG_FAILED:
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    default:
      return state;
  }
}