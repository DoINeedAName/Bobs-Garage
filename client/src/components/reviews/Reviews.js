import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SingleReview from './SingleReview';
import {getReviews} from '../../actions/reviewActions';
import { BsPlusLg } from "react-icons/bs";
import {Link} from 'react-router-dom';
import '../../actions/authActions';

const Reviews = ({getReviews, loading, reviews, isAuthenticated}) => {
  useEffect(() => {
    getReviews();
  }, [getReviews]);

  return loading ? (<h1>Loading...</h1>) : (
    <div>
      <div className='container mt-3'>
        <h1 className='text-align-center'>Reviews</h1>
        {isAuthenticated? ( 
          <div className='row'>
            <div className='container'>
              <div style={{float: 'right'}}>
                <button 
                  className='btn btn-outline-primary m-3' 
                  type='button' 
                >
                  <Link className='text-decoration-none text-dark' to={`add`}>
                    <BsPlusLg className='text-dark' style={{ cursor: 'pointer'}}/>
                    Add Review   
                  </Link>
                </button>
              </div>
            </div>     
          </div>          
        ) : null}
      </div>
      <div className='container'>
        {
          reviews.map(review => (
            <SingleReview
              key={review.id}
              review={review}
            />
          ))
        }
      </div>   
    </div> 
  )
}

Reviews.propTypes = {
  getReviews: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  reviews: state.reviews.reviews,
  loading: state.reviews.loading,
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {getReviews})(Reviews)