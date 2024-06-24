import React from "react";
import "./Contact.css";
import call_icon from "../../assets/assets/call_icon.svg";
import mail_icon from "../../assets/assets/mail_icon.svg";
import location_icon from "../../assets/assets/location_icon.svg";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h2>Get in touch</h2>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h3>Let's talk</h3>
          <p>
            If you have any questions or would like to get in touch, please feel
            free to send me a message. I will get back to you as soon as
            possible.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="call_icon" />
              <p><a href="mailto:apurva18092003@gmail.com">apurva18092003@gmail.com</a></p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call_icon" />
              <p><a href="tel:+91-1234567890">+91 1234567890</a></p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="call_icon" />
              <p>Mehsana, Gujarat, India</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name"/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email"/>
          <label htmlFor="">Your Message</label>
          <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
          <button type="submit" className="contact-submit ">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
