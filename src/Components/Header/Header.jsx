import React from 'react';
import './Header.css'

function Header() {
  const handleResumeClick = () => {
    // Open the PDF in a new tab
    window.open("/assets/CV.pdf");
  }



    
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
            <div className="resume-button" onClick={handleResumeClick}>
                My Resume
            </div>
        </div>

    </>
      
  );
};

export default Header;

