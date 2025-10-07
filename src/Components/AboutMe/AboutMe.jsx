import React from 'react'
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src="/assets/profile.jpg" alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Bachelor of Science in Computer Science and Information Technology</p>
                <p>Frontend & Backend</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "70%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width: "50%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}}/></div>
                <div className="about-skill"><p>NextJs</p><hr style={{width: "40%"}}/></div>
            </div>
        </div>
      </div>

      <div className="about-achievments">
        <div className="about-achievment">
        <h1>0</h1>
        <p>Years Experience</p>
      </div>
      <hr />
      <div className="about-achievment">
        <h1>1</h1>
        <p>Project about to be completed</p>
      </div>
      <hr />
      <div className="about-achievment">
        <h1>0</h1>
        <p>Sites deployed</p>
      </div>
      </div>
    </div>
  )
}

export default AboutMe
