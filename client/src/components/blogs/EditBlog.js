import React, {Fragment, useState, useEffect} from 'react';
import {useParams, useNavigate, Navigate} from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {updateBlog, getBlog} from '../../actions/blogActions';
import '../../actions/authActions';

const EditBlog = ({
  blog,
  getBlog,
  updateBlog,
  isAdmin
}) => {
  const [formData, setFormData] = useState ({
    heading: '',
    image: '',
    content: ''
  });

  const {id} = useParams();
  console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    getBlog(id);
    setFormData({
      heading: blog.heading,
      image: blog.image,
      content: blog.content
    })
  }, [getBlog, id, blog.heading, blog.image, blog.content]);

  const {heading, image, content} = formData;

  const onChange = e => setFormData(
    {...formData, [e.target.name]: e.target.value}
  );

  const onSubmit = async(e) => {
    e.preventDefault();

    if(heading === ''){
      setFormData({...formData, errors: {heading: 'A heading is required'}})
    }
    if (image === ''){
      setFormData({...formData, errors: {image: 'Image is required'}})
    }
    if (content === ''){
      setFormData({...formData, errors: {content: 'Content is required'}})
    }
    console.log('OnSubmit Edit Blog running...');
    const updBlog = {
      id,
      heading,
      image,
      content
    }
    console.log(updBlog);
    updateBlog(updBlog)

    navigate('/blogs', {replace: true});
  }

  if(!isAdmin){
    return <Navigate to='/'/>
  }
  return (
    <Fragment>
      <h1 className='text-primary'>Edit Blog</h1>
      <div className='card mb-3'>
        <div classname='card-header'>Edit Blog</div>
        <div className='card-body'>
          <form onSubmit={e => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='heading'>Heading</label>
              <input
                type='text'
                className='form-control'
                id='heading'
                placeholder='Heading'
                name='heading'
                value={heading}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='image'>Image</label>
              <input
                type='url'
                className='form-control'
                id='image'
                placeholder='Insert URL for image here'
                name='image'
                value={image}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='content'>Content</label>
              <textarea
                type='text'
                rows='5'
                className='form-control'
                id='content'
                placeholder='content'
                name='content'
                value={content}
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

EditBlog.propTypes = {
  updateBlog: PropTypes.func.isRequired,
  getBlog: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool
}

const mapStateToProps = state => ({
  blog: state.blogs.blog,
  isAdmin: state.auth.isAdmin
});

export default connect(mapStateToProps, {getBlog, updateBlog}) (EditBlog)