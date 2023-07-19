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
} from './types';

import axios from 'axios';

export const getServices = () => async dispatch => {
  try {
    const res = await axios.get('/api/services');
    dispatch({
      type: GET_SERVICES,
      payload: res.data
    });
  }
  catch (error) {
  }
};

export const sortServiceAsc = () => async dispatch => {
  try {
    const res = await axios.get('/api/services/order-a');
    dispatch({
      type: SORT_ASC,
      payload: res.data
    });
  }
  catch (error) {
    dispatch({
      type: SORT_ERROR,
      payload: error
    })
  }
}

export const sortServiceDesc = () => async dispatch => {
  try {
    const res = await axios.get('/api/services/order-d');
    dispatch({
      type: SORT_DESC,
      payload: res.data
    });
  }
  catch (error) {
    dispatch({
      type: SORT_ERROR,
      payload: error
    })
  }
}

export const getService = (id) => async dispatch => {
  const res = await axios.get(`/api/service/${id}`);
  dispatch({
    type: GET_SERVICE,
    payload: res.data
  });
};

export const addService = service => async dispatch => {
  const res = await axios.post('/api/service/add', service);
  dispatch ({
    type: ADD_SERVICE,
    payload: res.data
  });
};

export const updateService = service => async dispatch => {
  const res = await axios.put(`/api/service/edit/${service.id}`, service);
  dispatch({
    type: UPDATE_SERVICE,
    payload: res.data
  });
};

export const deleteService = (id) => async dispatch => {
  try{
    await axios.delete(`/api/service/${id}`);

    dispatch ({
      type: DELETE_SERVICE,
      payload: id
    })
  }
  catch (error) {
    dispatch({
      type: DEL_ERROR,
      payload: error
    });
  };
};
