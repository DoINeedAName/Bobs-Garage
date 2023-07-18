import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="mt-3">
        <h1>Welcome to Bob's Garage</h1>
      </div>
      <div className='mt-3'>
        <img src='./images/banner2.jpg'
          className='img-fluid'
          alt='banner'>
        </img>
      </div>

      <div className='container'>
        <div className='card m-3'>
          <div className='row card-body'>
            <h1 className='text-align-center'>
              Our Services
            </h1>
          </div>
          <div className='row card-body'>
            <img src='./images/CarService.jpg'
              className='card-img-top mx-auto'
              style={{width: '30rem'}}
              alt='services'>
            </img>
          </div>
          <div className='row card-body m-3'>
          <Link to='/services'>
              <button
              type="button" 
              className="btn btn-outline-primary fs-3 mx-auto" 
              style={{width: '30rem'}}>
                See Our Services
              </button>
            </Link>
          </div>
        </div>
        <div className='card m-3'>
          <div className='row card-body'>
            <h1 className='text-align-center'>
              About Us
            </h1>
          </div>
          <div className='row card-body'>
            <img src='./images/About.jpg'
              className='card-img-top mx-auto'
              style={{width: '30rem'}}
              alt='about us'>
            </img>
          </div>
          <div className='row card-body m-3'>
            <Link to='/about'>
              <button
              type="button" 
              className="btn btn-outline-primary fs-3 mx-auto" 
              style={{width: '30rem'}}>
                See More About Us
              </button>
            </Link>
          </div>
        </div>    
      </div>
    </div>
  )
}

export default Home