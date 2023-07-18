// Import react and needed modules
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/authActions';
import {FaHome, FaQuestion, FaDoorOpen, FaSignInAlt, FaSignOutAlt, FaMicroblog} from 'react-icons/fa'
import {ImWrench} from "react-icons/im";
import { MdOutlineReviews } from "react-icons/md";
import {ThemeSwitch} from './ThemeSwitch.js';

const Header = ({logout, branding, isAuthenticated, isAdmin,}) => {
  
// console.log(props)
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {branding}
        </Link>
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
            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle" 
                to="#" role="button" 
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaQuestion/>About
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link class="dropdown-item" to="/about">About Us</Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/staff">Meet Our Staff</Link>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item dropdown">
              <button
                className="navbar-toggler" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNavDarkDropdown"
                type="button"
                aria-controls="navbarNavDarkDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"/>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <button 
                      class="btn btn-dark dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FaQuestion/>About
                    </button>
                    <ul className='dropdown-menu dropdown-menu-dark' data-bs-theme="dark">
                      <li>
                        <Link className="nav-link dropdown-item" to="/about">About</Link>
                      </li>
                      <li>
                        <Link className="nav-link dropdown-item" to="/staff">Meet Our Staff</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li> */}
          </ul>
            
          <ul className="nav justify-content-end navbar-nav">
            {!isAuthenticated?(
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/register"><FaDoorOpen/>Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login"><FaSignInAlt/>Login</Link>
                </li>
              </> 
                ) : 
                <Link onClick={logout} className="nav-link" to="#!"><FaSignOutAlt/>Logout</Link>
            }
          </ul>       
          {/* <ThemeSwitch/> */}
          {/* {isAuthenticated?(
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                
              </li> 
              
            </ul>
          ) : null} */}
          
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