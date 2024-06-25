import React from "react";
import "./Hero.css";
import profile_img from "../../assets/assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from "../../assets/Resume.pdf";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <img src={profile_img} alt="" className="profile-img" />
      <h1><span>I'm Apurva Prajapati,</span> a Web Developer.</h1>
      <p>
        I'm a web developer based in India. I have a passion for web development
        and love to create for web.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume">
            <a className="button" href={Resume} download = "Resume.pdf">
            My Resume
            </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
