import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'


const Navbar = () => {
  return (
    <div className='user-navbar'>
        <div className="nav-logo">
            <h1>Bike rental</h1>
        </div>
        <div className="nav-page-link">
            <p><Link className='link' to="">Home</Link></p>
            <p><Link className='link' to="">BIkes</Link></p>
            <p><Link className='link' to="">Adout us</Link></p>
            <p><Link className='link' to="">Contact us</Link></p>
          
        </div>
        <div className='nav-login'>
            <p>login</p>
            <p>register</p>
        </div>
      
    </div>
  )
}

export default Navbar
