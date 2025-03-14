import React from "react";
import linkedIn from "../Images/linkedin.png"
import github from "../Images/github.png"
import gmail from "../Images/gmail.png"
const ContactMe = () => {
  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-title">
        Contact <span className="highlight">Me</span>
      </h1>
      <p className="contact-description">
        Let's connect! Feel free to reach out via LinkedIn, GitHub, or Email.
      </p>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/montu-garg-194394212" target="_blank" rel="noopener noreferrer" className="contact-link">
          <img src={linkedIn} alt="" width={40}></img>
        </a>
        <a href="https://github.com/MontuGarg" target="_blank" rel="noopener noreferrer" className="contact-link">
        <img src={github} alt="" width={40}></img>
        </a>
        <a href="mailto:garmontu3@gmail.com" className="contact-link">
        <img src={gmail} alt="" width={40}></img>
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
