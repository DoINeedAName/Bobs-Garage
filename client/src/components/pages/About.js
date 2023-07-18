import React from 'react'
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className='container mt-3'>
        <h1 className='text-align-center'>About Bob's Garage</h1>
      </div>

      <div className='card m-3'>
        <div className='row card-body'>
          <div className='col-lg-6'>
            <img src='./images/History.jpg'
                className='img-fluid'
                alt='Our History'>
             </img>   
          </div>
          <div className='col'>
            <div className='row'>
              <h2>The History of Bob's Garage</h2>
            </div>
            <div className='row'>
              <p className='fs-5' style={{textAlign: 'left'}}>
                Bob had always been passionate about cars ever since his high school years. <br/>
                He would always be in his dad's garage fixing up his old Ford Roadster.
                By the time Bob turned 17 he had restored the Roadster back to its former glory
                which is when he decided he wanted to have his own shop. <br/>
                Bob opened his own mechanic shop in 1987 when he was just 19 years old and has been operating it since. <br/>
                The Ford Roadster he had restored is displayed in his store to this very day.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='card m-3'>
        <div className='row card-body'>
          <div className='col-lg-6'>
            <img src='./images/StaffGroup.jpg'
                className='img-fluid'
                alt='Our History'>
             </img>   
          </div>
          <div className='col'>
            <div className='row'>
              <h2>Meet Our Staff</h2>
            </div>
            <div className='row'>
              <p className='fs-4' style={{textAlign: 'left'}}>
                Bob only hires the most dedicated and passionate people of the craft. <br/>
                If you're not already convinced that your vehicle is in good hands then head over here to meet each of Bob's staff.
              </p>
            </div>
            <div className='row'>
              <button className='btn btn-outline-primary btn-lg'>
                <Link to='/staff' className='text-decoration-none link-dark'>Meet Our Staff</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='card m-3'>
        <div className='row card-body'>
          <div className='col-lg-6'>
            <img src='./images/Customer.jpg'
                className='img-fluid'
                alt='Our History'>
             </img>   
          </div>
          <div className='col'>
            <div className='row'>
              <h2>See Our Reviews</h2>
            </div>
            <div className='row'>
              <p className='fs-4' style={{textAlign: 'left'}}>
              It's not only Bob who thinks your vehicles are in good hands. <br/>
                Have a look at what our customers have been saying about us to see for yourself.
              </p>
            </div>
            <div className='row'>
              <button className='btn btn-outline-primary btn-lg'>
                <Link to='/staff' className='text-decoration-none link-dark'>See Our Reviews</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About