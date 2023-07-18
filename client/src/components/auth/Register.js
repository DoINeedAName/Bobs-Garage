import React, { Fragment, useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {register} from '../../actions/authActions'
import { connect } from 'react-redux';

const Register = ({register, isAuthenticated}) => {

  // Set up form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordCompare:'',
    errors: {}
  })

  // const [errors, setErrors] = useState({})

  // Destructure state
  const {name, email, password, passwordCompare, errors} = formData

  // Onchange function
  const onChange = e => setFormData(
    {...formData, [e.target.name]: e.target.value}
  );


  // On submit
  const onSubmit = async(e) => {
    e.preventDefault();
    // Validation
    if(name === ''){
      setFormData({...formData, errors: {name: 'Name is required'}})
      return;
    }
    if(email === ''){
      setFormData({...formData, errors: {email: 'Email is required'}})
      return;
    }
    if(!email.includes('@')){
      setFormData({...formData, errors: {invalidEmail: 'must be a valid email'}})
    }
    if(password === ''){
      setFormData({...formData, errors: {password: 'Password is required'}})
      return;
    }
    if(password.length < 6){
      setFormData({...formData, errors: {weakPassword: 'Password must have at least 6 characters'}})
    }
    if(passwordCompare === '') {
      // Error message
      setFormData({...formData, errors: {passwordCompare: 'You need to confirm your password'}});
      return;
    } 
    if(password !== passwordCompare) {
      // Error message
      setFormData({...formData, errors: {password: 'Passwords do not match'}});
      return;
    } 
    
    const user = {name, email, password}
    register(user);
    
    console.log('OnSubmit running...');
  }

  if(isAuthenticated) {
    return <Navigate to='/' />
  }

  // Form
  return (
    <Fragment>
      <h1 className='text-primary'>Register as a new user</h1>
      <div className='card mb-3'>
        <div className='card-header'>Register</div>
        <div className='card-body'>
          <form onSubmit={e => onSubmit(e)}>
            
          <div className='mb-3'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                className= {classnames('form-control', {'is-invalid' : errors.name})}
                id='name'
                placeholder='name'
                name='name'
                value={name}
                onChange={e => onChange(e)}
                />
                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
            </div>
            <div className='mb-3'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                className= {classnames('form-control', {'is-invalid' : errors.email}, {'is-invalid' : errors.invalidEmail})}
                id='email'
                placeholder='email'
                name='email'
                value={email}
                onChange={e => onChange(e)}
                />
                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                {errors.invalidEmail && <div className='invalid-feedback'>{errors.invalidEmail}</div>}
            </div>
            <div className='mb-3'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className=  {classnames('form-control', {'is-invalid' : errors.password}, {'is-invalid' : errors.weakPassword})}
                id='password'
                placeholder='password'
                name='password'
                value={password}
                onChange={e => onChange(e)}
                />
                {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
                {errors.weakPassword && <div className='invalid-feedback'>{errors.weakPassword}</div>}
            </div>
            <div className='mb-3'>
              <label htmlFor='passwordCompare'>Confirm Password</label>
              <input
                type='password'
                className= {classnames('form-control', {'is-invalid' : errors.passwordCompare})}
                id='passwordCompare'
                placeholder='confirm password'
                name='passwordCompare'
                value={passwordCompare}
                onChange={e => onChange(e)}
                />
                {errors.passwordCompare && <div className='invalid-feedback'>{errors.passwordCompare}</div>}
            </div>
            <div className='d-grip gap-2'>
              <input 
                type='submit' 
                value='Register' 
                className='btn btn-light'
                />
            </div>
          </form>
        </div>
        <p className='m-1'>
          Already have an account? <Link to='/Login'>Login</Link>
        </p>
      </div>
    </Fragment>
  )
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {register}) (Register);