import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import myPhoto from '../assets/images/photo.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={myPhoto} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/tanviramoliya" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/tanvi-ramoliya/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Tanvi Ramoliya</h1>
          <p>Senior Full Stack Developer & Team Lead with 6.5+ years of professional experience specializing in the MERN stack,
            TypeScript, Next.js, and NestJS. Proven track record of architecting scalable enterprise web applications, leading
            high-performing cross-functional teams, and transforming complex business requirements into high-performance
            digital products. Expert in driving frontend optimizations, designing clean microservices architectures, and
            establishing robust engineering workflows that drastically accelerate time-to-market.
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/tanviramoliya" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/tanvi-ramoliya/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;