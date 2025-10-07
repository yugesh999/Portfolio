import React from 'react'
import { useState } from "react";
import './ContactMe.css'

const Contact = () => {

  const [result, setResult] = useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "868eee32-4c10-48b3-816c-28c95a5107a5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      // setResult("Form Submitted Successfully");
      alert("--Success--")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
<>
    <div id='contact' className="contact">
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

        <form onSubmit={onSubmit} className="contact-right">
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
