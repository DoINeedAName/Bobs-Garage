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
    console.log(res.data)
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
    console.log('Failed to retrieve blogs')
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
    console.log('Failed to retrieve blog')
  }
}

export const addBlog = blog => async dispatch => {
  try {
    console.log(blog);
    const res = await axios.post('/api/blog/add', blog);
    console.log(res.data);
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
    console.log('Failed to add blog')
  }
};

export const updateBlog = blog => async dispatch => {
  try {
    console.log(blog)
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
    console.log('Failed to update blog')
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