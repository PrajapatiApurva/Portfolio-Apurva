import React from 'react'
import './Footer.css'
import logo from '../../assets/assets/logo.png'
import user_icon from '../../assets/assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="logo" className='footer-logo'/>
          <p>
            I am a web developer and designer based in Mehsana, Gujarat, India.
            I am passionate about learning new technologies.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user_icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <button className="footer-subscribe">Subscribe</button>  
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>&copy; 2021 Apurva Prajapati. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Provacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;