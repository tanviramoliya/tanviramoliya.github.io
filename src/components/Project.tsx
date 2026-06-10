import React from "react";
import hubiloImage from '../assets/images/hubilo.jpg';
import backtoitImage from '../assets/images/backtoit.png';
import distinctImage from '../assets/images/distinct.png';
import dentwareImage from '../assets/images/dentware.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Featured Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://distinct.so/" target="_blank" rel="noreferrer"><img src={distinctImage} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://distinct.so/" target="_blank" rel="noreferrer"><h2>Distinct — Enterprise CX Platform</h2></a>
                <p>Developed a scalable design system, schema-driven site builder, and an automated admin analytics portal using React, TypeScript, Node.js, and MongoDB.</p>
            </div>
            <div className="project">
                <a href="https://www.backtoit.io/" target="_blank" rel="noreferrer"><img src={backtoitImage} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.backtoit.io/" target="_blank" rel="noreferrer"><h2>Backtoit — Link Collection & Organization App</h2></a>
                <p>Architected a full-stack link organization app featuring a Next.js frontend, a NestJS backend, secure authentication, and AWS S3 storage integration.</p>
            </div>
            <div className="project">
                <a href="https://www.dentware.ro/" target="_blank" rel="noreferrer"><img src={dentwareImage} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.dentware.ro/" target="_blank" rel="noreferrer"><h2>Aramis — Security Risk Management</h2></a>
                <p>Built real-time security visualization dashboards utilizing RxJS observables for complex stream handling and React Query for efficient data caching.</p>
            </div>
            <div className="project">
                <a href="https://dash.hubilo.com/" target="_blank" rel="noreferrer"><img src={hubiloImage} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://dash.hubilo.com/" target="_blank" rel="noreferrer"><h2>Hubilo — Virtual Event Organiser</h2></a>
                <p>Engineered end-to-end features and advanced memoization patterns for a large-scale virtual event platform using React, Node.js, and Redux.</p>
            </div>           
        </div>
    </div>
    );
}

export default Project;