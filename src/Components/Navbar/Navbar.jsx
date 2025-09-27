import React, { useState, useRef } from 'react'


import './Navbar.css'

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();
  
    const openMenu = () => {
      menuRef.current.style.right="0";
    }
    const closeMenu = () => {
      menuRef.current.style.right="-350px";
    }
    return (
      <div className='navbar'>
          <h1>Yugesh Maharjan</h1>
          <img src="/assets/sidebar.png" onClick={openMenu} alt="" className='nav-sidebar'/>
          <ul ref={menuRef} className='nav-menu'>
              <img src="assets/close.png" onClick={closeMenu} alt="" className="nav-close" />
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
