import React, { useState, useRef } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
              <img src="/assets/close.png" onClick={closeMenu} alt="" className="nav-close" />


              <li className={menu==="home" ? "active" : ""}onClick={()=>setMenu("home")}>
                <AnchorLink className='anchor-link' href="#home">Home</AnchorLink>
              </li>
              <li className={menu==="about" ? "active" : ""}onClick={()=>setMenu("about")}>
                <AnchorLink className='anchor-link' offset={130} href="#about">About Me</AnchorLink>
              </li>
              <li className={menu==="contact" ? "active" : ""}onClick={()=>setMenu("contact")}>
                <AnchorLink className='anchor-link' offset={130} href="#contact">Contact Me</AnchorLink>
              </li>
              <li className={menu==="services" ? "active" : ""}onClick={()=>setMenu("services")}>
                <AnchorLink className='anchor-link' offset={130} href="#services">Services</AnchorLink>
              </li>
          </ul>
          <div className="nav-connect" >
            <AnchorLink className='anchor-link' offset={130} href="#contact">Connect With Me</AnchorLink>
          </div>
      </div>
    )
}

export default Navbar
