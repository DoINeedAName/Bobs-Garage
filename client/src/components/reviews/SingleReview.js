import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {FaSortDown, FaTimes, FaPencilAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import { deleteReview } from '../../actions/reviewActions'
import '../../actions/authActions'

const SingleReview = ({review, isAdmin, deleteReview}) => {
  const [showReviewInfo, setShowReviewInfo] = useState(false);
  
  const onShowClick = e => {
    setShowReviewInfo(!showReviewInfo);
  }

  const {username, description, rating} = review

  return(
    <div className='card m-3'>
      <div className='row card-body'>
        <div className='col-sm-2'>
          <img className ='card-img-top' 
            src= './images/profile.jpg'
            style={{float: 'left'}}
            alt='service'>    
          </img>
        </div>
        <div className='col'>
          <div className='row'>
            <h3 style={{textAlign: 'left'}}>
              {username}
              {isAdmin?(
                <div className='btn-group' role='group' style={{float: 'right'}}>
                  <button 
                    className='btn btn-danger' 
                    type='button'
                    onClick={e => deleteReview(review.R_id)}
                  >
                    Delete
                  </button>           
                </div>   
              ) : null}
              
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

SingleReview.propTypes = {
  review: PropTypes.object.isRequired,
  deleteReview: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool
}

const mapStateToProps = state => ({
  isAdmin: state.auth.isAdmin
})

export default connect(mapStateToProps, {deleteReview})(SingleReview);