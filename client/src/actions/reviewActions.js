import {
  GET_REVIEWS,
  GET_REVIEWS_FAILED,
  GET_REVIEW,
  GET_REVIEW_FAILED,
  ADD_REVIEW,
  ADD_REVIEW_FAILED,
  DELETE_REVIEW,
  DELETE_ERROR
} from './types';

import axios from 'axios';

export const getReviews = () => async dispatch => {
  try {
    const res = await axios.get('/api/reviews');
    dispatch({
      type: GET_REVIEWS,
      payload: res.data
    });
  }
  catch (error) {
    dispatch({
      type: GET_REVIEWS_FAILED,
      payload: error
    });
  }
}

export const getReview = (id) => async dispatch => {
  try {
    const res = await axios.get(`/api/review/${id}`);
    dispatch({
      type: GET_REVIEW,
      payload: res.data
    })
  }
  catch (error) {
    dispatch({
      type: GET_REVIEW_FAILED,
      payload: error
    });
  }
}

export const addReview = review => async dispatch => {
  try {
    const res = await axios.post('/api/review/add', review);
    dispatch ({
      type: ADD_REVIEW,
      payload: res.data
    });
  }
  catch (error) {
    dispatch ({
      type: ADD_REVIEW_FAILED,
      payload: error
    });
  }
}

export const deleteReview = (id) => async dispatch => {
  try{
    await axios.delete(`/api/review/${id}`);

    dispatch({
      type: DELETE_REVIEW,
      payload: id
    })
  }
  catch (error) {
    dispatch({
      type: DELETE_ERROR,
      payload: error
    });
  };
}