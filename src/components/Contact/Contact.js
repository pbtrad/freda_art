import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="section-container text-center">
      <h1 className="mt-5">Get in touch.</h1>

      <div className="contact-form-container mx-auto">
        <form
          className="contact-form"
          action="https://formspree.io/f/meqnazkv"
          method="POST"
        >
          {/* Email Id Input */}
          <input
            type="email"
            placeholder="Your Email ID"
            name="_replyto"
            className="input-box email-input"
            autoComplete="off"
          />

          {/* Email Body */}
          <textarea
            type="text"
            placeholder="Your Message"
            name="message"
            className="input-box body-input"
          ></textarea>

          {/* Submit button */}
          <button type="submit" className="contact-btn">
            Send Email
          </button>
        </form>
      </div>

      <div className="social-icons-container">
        <a href="https://www.facebook.com/freda.hatch" className="social-icon">
        <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="facebook-icon"/>
        </a>
      </div>

    </div>
  );
};

export default Contact;
