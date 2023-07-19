import React, {Fragment, useState} from 'react';
import Proptypes from 'prop-types';
import classnames from 'classnames';
import {useNavigate, Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import { addReview } from '../../actions/reviewActions';
import '../../actions/authActions';

const AddReview = ({addReview, isAuthenticated, U_id, username}) => {
  const [formData, setFormData] = useState({
    description: '',
    rating: '',
    errors: {}
  });

  const {description, rating, errors} = formData;
  const navigate = useNavigate();

  const onChange = e => setFormData(
    {...formData, [e.target.name]: e.target.value}
  )

  const onSubmit = async(e) => {
    e.preventDefault();

    // Code for validation

    if (description === ''){
      setFormData({...formData, errors: {description: 'A description is required'}});
      return;
    }

    const newReview = {
      U_id,
      username,
      description,
      rating
    }

    addReview(newReview);

    navigate('/reviews')
  }

  if(!isAuthenticated) {
    return <Navigate to='../auth/login' />
  }

  return(
    <Fragment>
      <h1 className='text-primary'>Leave a Review</h1>
      <div className='card mb-3'>
        <div className='card-body'>
          <form onSubmit={e => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='description'>Description</label>
              <textarea
                rows='5'
                type='text'
                className= {classnames('form-control', {'is-invalid' : errors.description})}
                id='description'
                placeholder='Description'
                name='description'
                value={description}
                onChange={e => onChange(e)}
                />
                {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
            </div>
            <div className='d-grip gap-2'>
              <input 
                type='submit' 
                value='Submit Review' 
                className='btn btn-primary'
                />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

AddReview.propTypes = {
  addReview: Proptypes.func.isRequired,
  isAuthenticated: Proptypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  U_id: state.auth.user.U_id,
  username: state.auth.user.name
})

export default connect(mapStateToProps, {addReview})(AddReview);