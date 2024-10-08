import React from "react";
import "./Contact.css";
import call_icon from "../../assets/assets/call_icon.svg";
import mail_icon from "../../assets/assets/mail_icon.svg";
import location_icon from "../../assets/assets/location_icon.svg";
import github_mark from "../../assets/assets/github_mark.svg";
import linkedin_mark from "../../assets/assets/linkedin_mark.svg";
import leetcode_mark from "../../assets/assets/leetcode_mark.svg";

const Contact = () => {

  const mail_key=import.meta.env.VITE_APP_MAIL_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", mail_key );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-title sub-title">
        <h2 id="contact">Get in touch</h2>
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
              <img src={mail_icon} alt="mail_icon" />
              <p>
                <a href="mailto:appu18092003@gmail.com">
                  appu18092003@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call_icon" />
              <p>
                <a href="tel:+91-8128393618">+91 8128393618</a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location_icon" />
              <a href="https://maps.app.goo.gl/YqscVurT4SiwUEpB9">Mehsana, Gujarat, India</a>
            </div>
            <div className="contact-detail social">
              <a target="_blank" href="https://github.com/PrajapatiApurva"><img src={github_mark} alt="call_icon" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/apurva-prajapati/"><img src={linkedin_mark} alt="call_icon" /></a>
              <a target="_blank" href="https://leetcode.com/u/ApurvaPrajapati/"><img src={leetcode_mark} alt="call_icon" /></a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit}  className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required/>
          <label htmlFor="">Your Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit ">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
