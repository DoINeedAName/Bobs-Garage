import React from 'react'

const Staff = () => {
  return (
    <div className='container m-3'>
      <div className='row'>
        <h1 className='text-align-center'>Meet Our Staff</h1>
      </div>
      <div className='card mb-3'>
        <div className='row card-body'>
          <div className='col-lg-6'>
            <img src='./images/Bob.jpg'
                className='img-fluid'
                alt='Bob'>
             </img>   
          </div>
          <div className='col'>
            <div className='row'>
              <h2>Bob</h2>
            </div>
            <div className='row'>
            <p className='card-text text-center fs-4'>
                Bob is the owner of this fine establishment. <br/> 
                He founded this shop back in 1987 and has been the face of the business ever since.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-4'>
          <div className='card mt-3'>
            <img 
              src='./images/Louie.jpg'
              className="card-img-top" 
              alt='Louie'>
            </img>
            <div class='card-body'>
              <h4>Louie</h4>
              <p className='card-text text-center'>
                Louie is a long time employee here at Bob's Garage and a very well trusted mechanic. <br/>
                If you ever get the pleasure of getting your car serviced by this guy your vehicle is in good hands.
              </p>  
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card mt-3'>
            <img 
              src='./images/Sam.jpg'
              className="card-img-top" 
              alt='Sam'>
            </img>
            <div class='card-body'>
              <h4>Sam</h4>
              <p className='card-text text-center'>
                  Don't let her looks decieve you. <br/>
                  Sam is our young apprentice but her skills are comparable to no other. <br/>
                  She will always provide the same quality and car for your vehicle as an expert would.
                </p> 
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card mt-3'>
            <img 
              src='./images/Debbie.jpg'
              className="card-img-top" 
              alt='Sam'>
            </img>
            <div className='card-body'>
              <h4>Debbie</h4>
                <p className='card-text text-center'>
                  Debbie is the first point of call for our customers. She is our receptionist but she's as knowledgable about cars as the rest of the staff
                </p> 
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Staff