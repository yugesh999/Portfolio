import React from 'react'
import './ContactMe.css'
const Contact = () => {
  return (
<>
    <div className="contact">
      <div className="contact-title">
          <h1>Contact Me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="/assets/mail-icon.png" alt="" />
              <p>yugeshmaharjan16@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="/assets/phone-icon.png" alt="" />
              <p>9808421123</p>
            </div>
            <div className="contact-detail">
              <img src="/assets/location-icon.png" alt="" />
              <p>Lalitpur, Nepal</p>
            </div>
          </div>
        </div>

        <form className="contact-right">
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Enter your name' name='name'/>
          <label htmlFor="">Email</label>
          <input type="email" placeholder='Enter your email' name='email'/>
          <label htmlFor="">Message</label>
          <textarea name="message" rows="8" placeholder="Message"></textarea>
          <button type="submot" className='contact-submit'>Submit</button>
        </form>
      </div>
    </div>
</>
  )
}

export default Contact
