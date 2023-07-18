import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleBlog from './SingleBlog';
import {getBlogs} from '../../actions/blogActions';
import '../../actions/authActions';
import { BsPlusLg } from "react-icons/bs";
import {Link} from 'react-router-dom';

const Blogs = ({getBlogs, blogs, isAdmin}) => {
  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <div>
      <div className='container mt-3'>
        <h1 
          className='text-align-center'>Blogs
        </h1>
        {isAdmin? ( 
          <div className='row'>
            <div className='container'>
              <div style={{float: 'right'}}>
                <button 
                  className='btn btn-outline-primary m-3' 
                  type='button' 
                >
                  <Link className='text-decoration-none text-dark' to={`add`}>
                  <BsPlusLg className='text-dark' style={{ cursor: 'pointer'}}/>
                  Add Blog   
                  </Link>
                </button>
              </div>
            </div>
               
          </div>          
        ) : null} 
      </div>
        <div className='container'>
          {
          blogs.map(blog => (
            <SingleBlog
              key={blog.B_id}
              blog={blog}
            />
          ))
        }
        </div>   
    </div>
  )
}

Blogs.propTypes = {
  getBlogs: PropTypes.func.isRequired,
  blogs: PropTypes.array.isRequired,
  isAdmin: PropTypes.bool
}

const mapStateToProps = state => ({
  blogs: state.blogs.blogs,
  isAdmin: state.auth.isAdmin
})

export default connect(mapStateToProps, {getBlogs})(Blogs)