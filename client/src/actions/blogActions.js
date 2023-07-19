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
} from './types';

import axios from 'axios';

export const getBlogs = () => async dispatch => {
  try {
    const res = await axios.get('/api/blogs');
    dispatch({
      type: GET_BLOGS,
      payload: res.data
    });
  }
  catch (error) {
    dispatch({
      type: GET_BLOGS_FAILED,
      payload: error
    })
  }
};

export const getBlog = (id) => async dispatch => {
  try{
    const res = await axios.get(`/api/blog/${id}`);
      dispatch({
      type: GET_BLOG,
      payload: res.data
    });
  }
  catch (error) {
    dispatch({
      type: GET_BLOG_FAILED,
      payload: error
    })
  }
}

export const addBlog = blog => async dispatch => {
  try {
    const res = await axios.post('/api/blog/add', blog);
    dispatch ({
      type: ADD_BLOG,
      payload: res.data
    });
  }
  catch (error) {
    dispatch({
      type: ADD_BLOG_FAILED,
      payload: error
    })
  }
};

export const updateBlog = blog => async dispatch => {
  try {
    const res = await axios.put(`/api/blog/edit/${blog.id}`, blog);
    dispatch({
      type: UPDATE_BLOG,
      payload: res.data
    })
  }
  catch (error) {
    dispatch({
      type: UPDATE_BLOG_FAILED,
      payload: error
    })
  }
}

export const deleteBlog = (id) => async dispatch => {
  try {
    await axios.delete(`/api/blog/${id}`);
    dispatch ({
      type: DELETE_BLOG,
      payload: id
    })
  }
  catch (error) {
    dispatch ({
      type: DELETE_BLOG_FAILED,
      payload: error
    })
  }
}