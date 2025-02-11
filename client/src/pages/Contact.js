// src/pages/Contact.js
import React from "react";
import "../styles/Contact.css"; // Import the CSS file

function Contact() {
  return (
    <div className="contact-container">
      {" "}
      {/* Apply the styles to the main container */}
      <h1 className="contact-heading">Contact Us</h1> {/* Apply the styles to the heading */}
      <p className="contact-paragraph">
        For any inquiries, please email us at{" "}
        <a href="mailto:contact@wyattwiebe.com" className="contact-email blur-link">
          contact@wyattwiebe.com
        </a>
      </p>{" "}
    </div>
  );
}

export default Contact;
//    {/* Apply the styles to the paragraph and the email link */}
//    <form>
//    <label htmlFor='name'>Name:</label>
//    <input type='text' id='name' name='name' />
//    <label htmlFor='email'>Email:</label>
//    <input type='text' id='email' name='email' />
//    <label htmlFor='message'>Message:</label>
//    <textarea id='message' name='message'></textarea>
//    <input type='submit' value='Submit' />
//  </form>
