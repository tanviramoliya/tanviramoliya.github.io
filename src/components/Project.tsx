import React from "react";
import hubiloImage from '../assets/images/hubilo.jpg';
import backtoitImage from '../assets/images/backtoit.png';
import distinctImage from '../assets/images/distinct.png';
import dentwareImage from '../assets/images/dentware.png';
import kencorImage from '../assets/images/kencor.png';
import efamoImage from '../assets/images/efamo.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Featured Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://distinct.so/" target="_blank" rel="noreferrer"><img src={distinctImage} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://distinct.so/" target="_blank" rel="noreferrer"><h2>Distinct - Enterprise CX Platform</h2></a>
                    <p>Engineered a scalable Design System and drag-and-drop Site Builder using React, TypeScript, and Node.js. This platform empowered non-technical users to launch production-ready websites in minutes, reducing overall development cycles by 35%.</p>
                </div>
                <div className="project">
                    <a href="https://www.backtoit.io/" target="_blank" rel="noreferrer"><img src={backtoitImage} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://www.backtoit.io/" target="_blank" rel="noreferrer"><h2>Backtoit - Link Management</h2></a>
                    <p>Designed a robust, high-performance link organization ecosystem by decoupling a Next.js frontend from a modular NestJS API. Integrated AWS S3 for secure asset handling and implemented granular RBAC authentication to manage enterprise-level user permissions.</p>
                </div>
                <div className="project">
                    <a href="https://www.dentware.ro/" target="_blank" rel="noreferrer"><img src={dentwareImage} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://www.dentware.ro/" target="_blank" rel="noreferrer"><h2>Dentware - Dental Clinic Management</h2></a>
                    <p>Developed an interactive scheduling calendar mapping doctor availability against incoming appointments, eliminating double-booking errors. Engineered a graphical diagnostic comparison module enabling clinicians to view side-by-side historical patient metrics and X-ray images concurrently.</p>
                </div>
                <div className="project">
                    <a href="https://dash.hubilo.com/" target="_blank" rel="noreferrer"><img src={hubiloImage} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://dash.hubilo.com/" target="_blank" rel="noreferrer"><h2>Hubilo - Virtual Event Organiser</h2></a>
                    <p>Optimized a high-volume virtual event platform by implementing advanced React memoization strategies and a refined Redux Toolkit architecture. Dramatically improved UI responsiveness and eradicated race conditions during peak concurrent user load.</p>
                </div>
                <div className="project">
                    <img src={kencorImage} className="zoom" alt="thumbnail" width="100%" />
                    <h2>Kencor Health - Health Ecosystem</h2>
                    <p>Implemented a seamless real-time instant messaging network within a healthcare ecosystem using Strophe.js for XMPP-based communication, backed by comprehensive Jest test suites ensuring strict health-data presentation workflows.</p>
                </div>
                <div className="project">
                    <img src={efamoImage} className="zoom" alt="thumbnail" width="100%" />
                    <h2>efamo - Geosocial Networking & Dating App</h2>
                    <p>Built a secure full-stack social platform with multi-channel OAuth (Phone, Email, Facebook), a location-based match engine, and a multi-role Admin Panel with strict permission controls for managing user profiles and system credit points.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;