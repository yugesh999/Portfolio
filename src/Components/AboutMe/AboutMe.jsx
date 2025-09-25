import React from 'react'
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutTitle">
        <h1>About Me</h1>
      </div>
      <div className="aboutSection">
        <div className="aboutLeft">
            <img src="/assets/profile.jpg" alt="" />
        </div>
        <div className="aboutRight">
            <div className="aboutPara">
                <p>Bachelor of Science in Computer Science and Information Technology</p>
                <p>Frontend & Backend</p>
            </div>
            <div className="aboutSkills">
                <div className="aboutSkill"><p>HTML & CSS</p><hr style={{width: "70%"}}/></div>
                <div className="aboutSkill"><p>React JS</p><hr style={{width: "50%"}}/></div>
                <div className="aboutSkill"><p>JavaScript</p><hr style={{width: "60%"}}/></div>
                <div className="aboutSkill"><p>NextJs</p><hr style={{width: "40%"}}/></div>
            </div>
        </div>
      </div>

      <div className="aboutAchievments">
        <div className="aboutAchievment">
        <h1>0</h1>
        <p>Years Experience</p>
      </div>
      <hr />
      <div className="aboutAchievment">
        <h1>1</h1>
        <p>Project about to be completed</p>
      </div>
      <hr />
      <div className="aboutAchievment">
        <h1>0</h1>
        <p>Sites deployed</p>
      </div>
      </div>
    </div>
  )
}

export default AboutMe
