import React, {useState, Fragment} from 'react';
import {Link, Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {login} from '../../actions/authActions';

const Login = ({login, isAuthenticated}) => {

  // Sets form data
  const [formData, setFormData] = useState ({
    email: '',
    password: '',
    errors: {}
  });

  // Destructure state
  const {email, password, errors} = formData;

  const onChange = e => setFormData(
    {...formData, [e.target.name]: e.target.value}
    
  );

  const onSubmit = async(e) => {
    e.preventDefault();

    // Validation
    if(email === ''){
      setFormData({...formData, errors: {email: 'Email is required'}});
      return;
    }
    if(password === ''){
      setFormData({...formData, errors: {password: 'Password is required'}});
      return;
    }
    const user = {email, password}
    login(user);
  };

  if(isAuthenticated) {
    return <Navigate to='/' />
  }

  return (
    <Fragment>
      <h1 className='text-primary'>Login</h1>
      <div className='card mb-3'>
        <div className='card-body'>
          <form onSubmit={e => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                className= {classnames('form-control', {'is-invalid' : errors.email})}
                id='email'
                placeholder='email'
                name='email'
                value={email}
                onChange={e => onChange(e)}
                />
                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
            </div>
            <div className='mb-3'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className= {classnames('form-control', {'is-invalid' : errors.password})}
                id='password'
                placeholder='password'
                name='password'
                value={password}
                onChange={e => onChange(e)}
                />
                {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
            </div>
            <div className='d-grip gap-2'>
              <input 
                type='submit' 
                value='Login' 
                className='btn btn-primary'
                />
            </div>
          </form>
        </div>
        <p className='m-1'>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </div>
    </Fragment>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login)