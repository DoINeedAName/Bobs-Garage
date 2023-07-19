import React from 'react'
import {Link} from 'react-router-dom';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const date = new Date();

const Footer = () => {
  return (
    <div className='bg-dark p-2'>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<Link 
							className="nav-link fs-4 text-light" 
							to='#' >
							<AiOutlineFacebook/>Bob's Garage Facebook
						</Link>
					</div>
					<div className='col'>
						<h1 className='text-warning'>Bob's Garage</h1>
					</div>
					<div className='col'>
						<Link 
							className="nav-link fs-4 text-light" 
							to='#'> 
							<AiOutlineMail/>bobsgarage@email.com
						</Link>
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						<Link
						 	className="nav-link fs-4 text-light" 
						 	to='#' >
							<AiOutlineInstagram/>Bob's Garage Instagram
						</Link>
					</div>
					<div className='col'>
						<p className='py-2 ml-3 text-white'>
							copyright {String.fromCharCode(169)}
							{' ' + date.getFullYear()} Bob's Garage
						</p>
					</div>
					<div className='col'>
						<Link 
							className="nav-link fs-4 text-light" 
							to='#' ><AiOutlinePhone/>ph: 13 22 98
						</Link>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Footer