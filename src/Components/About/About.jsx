import React from "react";
import profile_img from "../../assets/assets/profile_img.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h2>About Me</h2>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" className="about-profile-img"/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a front-end developer with a passion for creating beautiful
              and user-friendly websites. I am a quick learner and a team player
              with good communication skills.
            </p>
            <p>
              My goal is to work with a team of developers to create innovative
              and user-friendly applications that will help businesses grow and
              reach their target audience.
            </p>
          </div>
          <div className="about-skills">
            <h3>Skills</h3>
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"75%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>React</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>MongoDB</p><hr style={{width:"40%"}}/></div>
            <div className="about-skill"><p>Git</p><hr style={{width:"50%"}}/></div>
          </div>
        </div>
      </div>
      <h3 className="achievement-head">Achievements</h3>
      <div className="about-achievements">
            <div className="about-achievement">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h3>8.6+</h3>
              <p>Sgpa in every semester</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h3>5+</h3>
              <p>Certifications</p>  
            </div>
          </div>    
    </div>
  );
};

export default About;
