// This is where we combine all our reducers together
import {combineReducers} from 'redux';
import serviceReducer from './serviceReducer';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import userReducer from './userReducer';
import reviewReducer from './reviewReducer';
import blogReducer from './blogReducer';

export default combineReducers({
  service: serviceReducer,
  auth: authReducer,
  alert: alertReducer,
  users: userReducer,
  reviews: reviewReducer,
  blogs: blogReducer
});