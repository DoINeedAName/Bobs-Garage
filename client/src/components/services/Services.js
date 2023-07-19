import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleService from './SingleService';
import {getServices, sortServiceAsc, sortServiceDesc} from '../../actions/serviceActions';
import { BsPlusLg } from "react-icons/bs";
import {Link} from 'react-router-dom';
import '../../actions/authActions';

const Services = ({getServices, loading, services, isAdmin, sortServiceAsc, sortServiceDesc}) => {

  useEffect(() => {
    getServices();
  }, [getServices]);

  // If loading is true it'll show a header that says Loading.
  // Otherwise it displays the content
  return loading ? ( <h1>Loading...</h1> ) : (
    <div>
      <div className='container mt-3'>
        <h1 
        className='text-align-center'>Services
        </h1>
        
        <div className='row' >
          <div className='container'>
            <div className='btn-group m-3' role='group' style={{float: 'right'}}>
              <button 
                type='button'
                className='btn btn-outline-primary'
                onClick={e => sortServiceAsc(e)}>
                Sort lowest price
              </button>
              <button 
                type='button'
                className='btn btn-outline-primary'
                onClick={e => sortServiceDesc(e)}>
                Sort highest price
              </button>
           </div>  
            {isAdmin? (
              <div className='m-3' style={{float: 'left'}}>
                <button 
                  className='btn btn-outline-primary m-3' 
                  type='button' 
                >
                  <Link className='text-decoration-none text-dark' to={`add`}>
                  <BsPlusLg className='text-dark' style={{ cursor: 'pointer'}}/>
                  Add Service   
                  </Link>
                </button>
              </div>             
            ) : null}  
          </div>   
       </div>
        <div className='container'>
          {
            services.map(service => (
              <SingleService 
                key={service.S_id}
                service={service}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

Services.propTypes = {
  getServices: PropTypes.func.isRequired,
  services: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool,
  sortServiceAsc: PropTypes.func,
  sortServiceDesc: PropTypes.func
}

const mapStateToProps = state => ({
  services: state.service.services,
  loading: state.service.loading,
  isAdmin: state.auth.isAdmin
})

export default connect(
  mapStateToProps,
   {
    getServices,
    sortServiceAsc, 
    sortServiceDesc
  }
)(Services);