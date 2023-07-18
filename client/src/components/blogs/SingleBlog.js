import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {FaSortDown, FaTimes, FaPencilAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import {deleteBlog} from '../../actions/blogActions'
import '../../actions/authActions';

const SingleBlog = ({blog, deleteBlog, isAdmin}) => {
  const [showBlogInfo, setShowBlogInfo] = useState(false);

  const onShowClick = e => {
    setShowBlogInfo(!showBlogInfo);
  }

  const {heading, image, content} = blog

  return (
    <div className='card m-3'>
      <div className='row card-body'>
        <h1 className='text-align-center'>
          {heading}
          
        </h1>
        <div>
          {isAdmin?(
            <div className='btn-group' role='group' style={{float: 'right'}}>
              <button
                className='btn btn-warning' 
                type='button'>
                  <Link 
                    to={`/blog/edit/${blog.B_id}`}
                    className='text-decoration-none text-dark'
                  >
                    Edit
                  </Link>
              </button>
              <button 
                className='btn btn-danger' 
                type='button'
                onClick={e => deleteBlog(blog.B_id)}
              >
                Delete
              </button>           
            </div>   
          ) : null}
        </div> 
      </div>
      <div className='row card-body'>
        <img className='card-img-top mx-auto'
          src={image}
          style={{width: '40rem'}}
          alt='blog'>
        </img>
      </div>
      <div className='row card-body m-3'>
        
        <p className='text-start'>
          {content}
        </p>
        
      </div>
    </div>
  )
}

SingleBlog.propTypes = {
  blog: PropTypes.object.isRequired,
  deleteBlog: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool
}

const mapStateToProps = state => ({
  isAdmin: state.auth.isAdmin
})

export default connect(mapStateToProps, {deleteBlog})(SingleBlog);