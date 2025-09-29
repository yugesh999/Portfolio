import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h2>Yugesh Maharjan</h2>
                <p>Frontend & Backend </p>
            </div>

            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src="./assets/user-icon.png" alt="" />
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
            <hr />

            <div className="footer-bottom">
                <p className='footer-bottom-left'>@ 2025 Yugesh Maharjan.</p>

                <div className="footer-bottom-right">
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>
    </div>
  )
}

export default Footer
