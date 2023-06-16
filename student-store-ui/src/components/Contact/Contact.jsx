import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="Contact" className="contact">
      <div className="content">
        <h3>Contact Us</h3>
        <div className="summary">
          <ul className="info">
            <li>
              <span className="label">Email:</span>
              <span>codepath.org</span>
            </li>
            <li>
              <span className="label">Phone:</span>
              <span>1-800-CODEPATH</span>
            </li>
            <li>
              <span className="label">Address:</span>
              <span>123 Fake Street, San Francisco, CA</span>
            </li>
            <li>
              <span className="label">Socials:</span>
              <span className="socials"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
