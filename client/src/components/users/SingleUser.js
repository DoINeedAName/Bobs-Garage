import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {FaTimes, FaPencilAlt} from 'react-icons/fa';
import {deleteUser} from '../../actions/userActions';

const SingleUser = ({user}) => {
  return (
    <tr>
      <td>{user.U_id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{ user.isAdmin ? 'Yes' : 'No'}</td>
      <td>
        <Link to={`/users/edit/${user.U_id}`}>
        <FaPencilAlt className='text-primary' style={{ cursor: 'pointer' }}/>
    </Link>
      </td>
      <td>
        <FaTimes onClick={e => deleteUser(user.U_id)} style={{ cursor: 'pointer', color: 'red', marginLeft: '10px'  }}/>
      </td>
    </tr>
  )
}

SingleUser.propTypes = {
  user: PropTypes.object.isRequired,
}

export default SingleUser