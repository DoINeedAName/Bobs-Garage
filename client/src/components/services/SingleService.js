import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import { deleteService } from '../../actions/serviceActions'
import '../../actions/authActions'

const SingleService = ({service, deleteService, isAdmin}) => {
  
  const {name, image, description, price} = service
  return(
    <div className='card m-3' >
      <div className='row card-body'>
        <div className='col-sm-4'>
          <img className ='card-img-top' 
            src={image}
            style={{float: 'left'}}
            alt='service'>   
          </img>
        </div>
        <div className='col'>
          <div className='row'>
            <h3 style={{textAlign: 'left'}}>
              {name}
              {' '}

              {isAdmin?(
                <div className='btn-group' role='group' style={{float: 'right'}}>
                  <button
                    className='btn btn-warning' 
                    type='button'>
                      <Link 
                        to={`/service/edit/${service.S_id}`}
                        className='text-decoration-none text-dark'
                      >
                        Edit
                      </Link>
                  </button>
                  <button 
                    className='btn btn-danger' 
                    type='button'
                    onClick={e => deleteService(service.S_id)}
                  >
                    Delete
                  </button>           
                </div>   
              ) : null}
                ${price} 
            </h3>
          </div>
          <div className='row'>
            {description}
          </div>
        </div>
      </div>
    </div>  
  )
}

SingleService.propTypes = {
  service: PropTypes.object.isRequired,
  deleteService: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool
}

const mapStateToProps = state => ({
  isAdmin: state.auth.isAdmin
})

export default connect(mapStateToProps, {deleteService})(SingleService);