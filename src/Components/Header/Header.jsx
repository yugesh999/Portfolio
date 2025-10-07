import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <>
        <div id="home" className="header-container">
            <img src="/assets/profile.jpg" alt="Profile Picture" />

            <h3>
                I am Yugesh Maharjan, Frontend Developer.
            </h3>
            <p>
                I am a frontend developer with 0 experience...
            </p>
            <div className="resume-button">
                My Resume
            </div>
        </div>

    </>
      
  );
};

export default Header;
