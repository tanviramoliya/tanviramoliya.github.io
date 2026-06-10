import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";

import "../assets/styles/Contact.scss";

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <div className="contact-body">
            <div className="contact-item">
              <a href={`mailto:ramoliyatanvi@gmail.com`} target="_blank" rel="noreferrer">
                <EmailIcon />
              </a>
              <a href={`mailto:ramoliyatanvi@gmail.com`} target="_blank" rel="noreferrer">
               ramoliyatanvi@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://github.com/tanviramoliya"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
              </a>
              <a
                href="https://github.com/tanviramoliya"
                target="_blank"
                rel="noreferrer"
              >
                github.com/tanviramoliya
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://www.linkedin.com/in/tanvi-ramoliya/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/tanvi-ramoliya/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/tanvi-ramoliya/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
