import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Yugesh Maharjan</h1>
            <img src="/assets/sidebar.png" alt=""/>

        <ul className='nav-menu'>
            <li><a href="#home">Home</a></li>
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contactus">Contact Me</a></li>
        </ul>
        <div className="nav-connect">
            Connect With Me
        </div>
    </div>
  )
}

export default Navbar
