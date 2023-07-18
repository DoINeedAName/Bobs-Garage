import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Navigate} from 'react-router-dom';

import {getUsers} from '../../actions/userActions'
import SingleUser from './SingleUser';


const Users = ({loading, users, getUsers, isAdmin}) => {

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if(!isAdmin){
    return <Navigate to ='/'/>
  }
  
  return loading ? (
    <h1> loading....</h1>
    ) : (
    <div className='mt-3'>
      <div className='card card-body mb-3'>
        <h1 className='text-primary'>User List</h1>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">U_Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Admin</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              { users.map(user => (
              <SingleUser key={user.U_id} user={user}/>
            ))}
            </tbody>
          </table>
      </div>
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getUsers: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool
}

const mapStateToProps = state => ({
  users: state.users.users,
  loading: state.users.loading,
  isAdmin: state.auth.isAdmin
});

export default connect(mapStateToProps, {getUsers})(Users)