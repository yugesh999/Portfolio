import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <>
        <div id="home" className="header-container">
            <img src="/assets/profile.jpg" alt="Profile Picture" />

            <h2>
                Yugesh Maharjan. 
            </h2>
            <p>
                Frontend Developer
            </p>
            <div className="resume-button">
                My Resume
            </div>
        </div>

    </>
      
  );
};

export default Header;
