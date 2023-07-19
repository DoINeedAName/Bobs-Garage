// Import react and needed modules
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';

// Imports custom components
import './App.css';
import './switcher.scss';
import store from './store';
import Theme from './components/theme/Theme'
import Alert from './components/layouts/Alert';
import NotFound from './components/layouts/NotFound';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/pages/Home';
import Services from './components/services/Services';
import AddService from './components/services/AddService';
import EditService from './components/services/EditService';
import About from './components/pages/About';
import Staff from './components/pages/Staff';
import Reviews from './components/reviews/Reviews';
import AddReview from './components/reviews/AddReview';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Users from './components/users/Users';
import Blogs from './components/blogs/Blogs';
import AddBlog from './components/blogs/AddBlog';
import EditBlog from './components/blogs/EditBlog';

// Return function can only have one parent container
// Can only have one div pretty much
const App = () => {

  return (    
    <>
      <Provider store = {store}>
        <Router>
          <Header branding="Bob's Garage"/>
          <div className='container'>
            <Alert/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='theme' element={<Theme/>}/>
              <Route path='services' element={<Services/>}/>
              <Route path='services/add' element={<AddService/>}/>
              <Route path='service/edit/:id' element={<EditService/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='staff' element={<Staff/>}/>
              <Route path='reviews' element={<Reviews/>}/>
              <Route path='reviews/add' element={<AddReview/>}/>
              <Route path='login' element={<Login/>} />
              <Route path='register' element={<Register/>}/>
              <Route path='*' element={<NotFound/>}/>
              <Route path='users' element={<Users/>}/>
              <Route path='blogs' element={<Blogs/>}/>
              <Route path='blogs/add' element={<AddBlog/>}/>
              <Route path='blog/edit/:id' element={<EditBlog/>}/>
            </Routes>        
          </div>        
        <Footer/>
      </Router>
    </Provider> 
 </>
  );
} 

export default App;
