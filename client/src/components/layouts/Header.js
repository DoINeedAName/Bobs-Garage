// Import react and needed modules
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/authActions';
import {FaHome, FaQuestion, FaDoorOpen, FaSignInAlt, FaSignOutAlt, FaMicroblog} from 'react-icons/fa'
import {ImWrench} from "react-icons/im";
import { MdOutlineReviews } from "react-icons/md";


const Header = ({logout, branding, isAuthenticated, isAdmin}) => {
  
// console.log(props)
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{branding}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><FaHome/>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services"><ImWrench/>Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blogs"><FaMicroblog/>Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/reviews"><MdOutlineReviews/>Reviews</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about"><FaQuestion/>About</Link>
        </li>
      </ul>
      {!isAuthenticated?(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/register"><FaDoorOpen/>Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login"><FaSignInAlt/>Login</Link>
          </li>
        </ul>       
      ) : null}
      {isAuthenticated?(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link onClick={logout} className="nav-link" to="#!"><FaSignOutAlt/>Logout</Link>
          </li> 
           
        </ul>
      ) : null} 
      {/* {isAdmin?(
            <li className="nav-item">
              <Link className="nav-link" to="/users"><FaSignInAlt/>Users</Link>
            </li>
          ) : null}   */}
    </div>
  </div>
</nav>
  )
}

// This sets a default value for prop components if nothing is passed through
Header.defaultProps = {
  branding: 'My App'
}

// Proptypes can be used to check data that is passed through
Header.propTypes = {
  branding: PropTypes.string,
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isAdmin: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.isAdmin
})

export default connect(mapStateToProps, {logout})(Header);