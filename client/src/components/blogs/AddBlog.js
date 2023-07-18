import React, {Fragment, useState} from 'react'
import Proptypes from 'prop-types';
import classnames from 'classnames';
import {useNavigate, Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {addBlog} from '../../actions/blogActions'
import '../../actions/authActions';

const AddBlog = ({addBlog, isAdmin}) => {
  const [formData, setFormData] = useState({
    heading: '',
    image: '',
    content: '',
    errors: {}
  });

  const {heading, image, content, errors} = formData;
  const navigate = useNavigate();

  const onChange = e => setFormData(
    {...formData, [e.target.name]: e.target.value}
  )

  const onSubmit = async(e) => {
    e.preventDefault();
    console.log('OnSubmit running...');

    if(heading === '') {
      setFormData({...formData, errors: {heading: 'Heading is required'}});
      return;
    }

    if(image === '') {
      setFormData({...formData, errors: {image: 'Image is required'}});
      return
    }

    if(content === '') {
      setFormData({...formData, errors: {content: 'Content is required'}});
      return
    }

    const newBlog = {
      heading,
      image,
      content
    }

    console.log(newBlog);
    addBlog(newBlog);

    navigate('/blogs')
  }

  if(!isAdmin){
    return <Navigate to='/' />
  }

  return(
    <Fragment>
      <h1 className='text-primary'>Add new Blog</h1>
      <div className='card mb-3'>
        <div className='card-header'>Add Blog</div>
        <div className='card-body'>
          <form onSubmit={e => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='heading'>Heading</label>
              <input
                type='text'
                className={classnames('form-control', {'is-invalid' : errors.heading})}
                id='heading'
                placeholder='Heading'
                name='heading'
                value={heading}
                onChange={e => onChange(e)}
              />
              {errors.heading && <div className='invalid-feedback'>{errors.heading}</div>}
            </div>
            <div className='mb-3'>
              <label htmlFor='image'>Image</label>
              <input
                type='url'
                className={classnames('form-control', {'is-invalid' : errors.image})}
                id='image'
                placeholder='Insert image URL here'
                name='image'
                value={image}
                onChange={e => onChange(e)}
              />
              {errors.image && <div className='invalid-feedback'>{errors.image}</div>}
            </div>
            <div className='mb-3'>
              <label htmlFor='content'>Content</label>
              <textarea
                type='text'
                rows='5'
                className={classnames('form-control', {'is-invalid' : errors.content})}
                id='content'
                placeholder='Content'
                name='content'
                value={content}
                onChange={e => onChange(e)}
              />
              {errors.content && <div className='invalid-feedback'>{errors.content}</div>}
            </div>
            <div className='d-grip gap-2'>
              <input
                type='submit'
                value='Add Blog'
                className='btn btn-light'
              />
            </div>
            
          </form>
        </div>
      </div>
    </Fragment>
  )
}

AddBlog.propTypes = {
  addBlog: Proptypes.func.isRequired,
  isAdmin: Proptypes.bool
}

const mapStateToProps = state => ({
  blog: state.blogs.blog,
  isAdmin: state.auth.isAdmin
})

export default connect(mapStateToProps, {addBlog})(AddBlog);