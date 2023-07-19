import React, {Fragment, useState} from 'react';
import Proptypes from 'prop-types';
import classnames from 'classnames';
import {useNavigate, Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import { addService } from '../../actions/serviceActions';
import '../../actions/authActions';


const AddService = ({addService, isAdmin}) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    price: '',
    errors: {}
  });

  const {name, image, description, price, errors} = formData;
  const navigate = useNavigate();

  const onChange = e => setFormData(
    {...formData, [e.target.name]: e.target.value}
  )

  const onSubmit = async(e) => {
    e.preventDefault();

    // Code for validation
    if (name === ''){
      setFormData({...formData, errors: {name: 'A name is required'}});
      return;
    }

    if (image === ''){
      setFormData({...formData, errors: {image: 'An image is required'}});
      return;
    }

    if (description === ''){
      setFormData({...formData, errors: {description: 'A description is required'}});
      return;
    }

    if (price === ''){
      setFormData({...formData, errors: {price: 'A price is required'}});
      return;
    }

    const newService = {
      name,
      image,
      description,
      price
    }

    addService(newService);

    navigate('/services')
  }

  if(!isAdmin){
    return <Navigate to='/'/>
  }

  return(
    <Fragment>
      <h1 className='text-primary'>Add New Service</h1>
      <div className='card mb-3'>
        <div className='card-body'>
          <form onSubmit={e => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                className= {classnames('form-control', {'is-invalid' : errors.name})}
                id='name'
                placeholder='Name'
                name='name'
                value={name}
                onChange={e => onChange(e)}
              />
              {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
            </div>
            <div className='mb-3'>
              <label htmlFor='image'>Image</label>
              <input
                type='url'
                className= {classnames('form-control', {'is-invalid' : errors.image})}
                id='image'
                placeholder='Paste Image URL here'
                name='image'
                value={image}
                onChange={e => onChange(e)}
              />
              {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
            </div>
            <div className='mb-3'>
              <label htmlFor='description'>Description</label>
              <textarea
                type='text'
                className= {classnames('form-control', {'is-invalid' : errors.description})}
                rows='5'
                id='description'
                placeholder='Description'
                name='description'
                value={description}
                onChange={e => onChange(e)}
                />
                {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
            </div>
            <div className='mb-3'>
              <label htmlFor='price'>Price</label>
              <input
                type='number'
                className= {classnames('form-control', {'is-invalid' : errors.price})}
                id='price'
                placeholder='Price'
                name='price'
                value={price}
                onChange={e => onChange(e)}
                />
                {errors.price && <div className='invalid-feedback'>{errors.price}</div>}
            </div>
            <div className='d-grip gap-2'>
              <input 
                type='submit' 
                value='Add Service' 
                className='btn btn-primary'
                />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

AddService.propTypes = {
  addService: Proptypes.func.isRequired,
  isAdmin: Proptypes.bool
}

const mapStateToProps = state => ({
  isAdmin: state.auth.isAdmin
})

export default connect(mapStateToProps, {addService})(AddService);