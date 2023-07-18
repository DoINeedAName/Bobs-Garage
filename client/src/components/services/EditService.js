import React, {Fragment, useState, useEffect} from 'react'
import {useParams, useNavigate, Navigate} from 'react-router-dom';
import PropTypes from 'prop-types'
import classnames from 'classnames';
import { connect } from 'react-redux';
import {updateService, getService} from '../../actions/serviceActions';
import '../../actions/authActions'

const EditService = ({
  service,
  getService,
  updateService,
  isAdmin
}) => {

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    price: '',
    errors: {}
  });

  const {id} = useParams();
  console.log(id);

  const navigate = useNavigate();

  useEffect(() => {   
    getService(id);
      setFormData({
        name: service.name,
        description: service.description,
        price: service.price
      })
  }, [getService, id, service.name, service.image, service.description, service.price]);

  const {name, image, description, price, errors} = formData;

  const onChange = e => setFormData(
    {...formData, [e.target.name]: e.target.value}
  );

  const onSubmit = async(e) => {
    e.preventDefault();

    // Validation
    if (name === ''){
      setFormData({...formData, errors: {nameMissing: 'Name is required'}})
    }
    if (image === ''){
      setFormData({...formData, errors: {image: 'Image is required'}})
    }
    if (description === ''){
      setFormData({...formData, errors: {description: 'Description is required'}})
    }
    if (price === ''){
      setFormData({...formData, errors: {price: 'Price is required'}})
    }
    console.log('OnSubmit Edit Service running...');
    const updService = {
      id,
      name,
      image,
      description,
      price
    }
    console.log(updService);
    updateService(updService)

    navigate('/services', {replace: true});   
  }

  if(!isAdmin) {
    return <Navigate to='/' />
  }

  return (
    <Fragment>
      <h1 className='text-primary'>Edit Service</h1>
      <div className='card mb-3'>
        <div className='card-header'>Edit Service</div>
        <div className='card-body'>
          <form onSubmit={e => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                // className= {classnames('form-control', {'is-invalid' : errors.nameMissing})}
                className = 'form-control'
                id='name'
                placeholder='Name'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
              />
              {/* {errors.nameMissing && <div className='invalid-feedback'>{errors.nameMissing}</div>} */}
            </div>
            <div className='mb-3'>
              <label htmlFor='image'>Image</label>
              <input
                type='url'
                className='form-control'
                id='image'
                placeholder='Insert image URL here'
                name='image'
                value={image}
                onChange={(e) => onChange(e)}
              />
              
            </div>
            <div className='mb-3'>
              <label htmlFor='description'>Description</label>
              <textarea
                type='text'
                rows='5'
                className='form-control'
                id='description'
                placeholder='Description'
                name='description'
                value={description}
                onChange={(e) => onChange(e)}
                />
                 
            </div>
            <div className='mb-3'>
              <label htmlFor='price'>Price</label>
              <input
                type='number'
                className='form-control'
                id='price'
                placeholder='Price'
                name='price'
                value={price}
                onChange={(e) => onChange(e)}
                />
              
            </div>
            <div className='d-grip gap-2'>
              <input 
                type='submit' 
                value='Save Changes' 
                className='btn btn-light'
                />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}


EditService.propTypes = {
  updateService: PropTypes.func.isRequired,
  getService: PropTypes.func.isRequired,
  service: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool
  // loading: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  service: state.service.service,
  isAdmin: state.auth.isAdmin
});

export default connect(mapStateToProps, {getService, updateService}) (EditService)

