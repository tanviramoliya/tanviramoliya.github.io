import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact,  faDocker} from '@fortawesome/free-brands-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "ReactJS",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "SQL",
    "Redux Toolkit",
    "Saas",
    "Postman"
];

const labelsSecond = [
    "NestJS", "RESTful APIs", "Agile/Scrum", "Git", "Jest", "React Testing Library", "Jira"
];

const labelsThird = [
    "AWS", "Microsoft Azure", "AWS S3", "CI/CD", "Ubuntu Linux", "Git", "Bitbucket","Github Actions"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I build scalable, user-centric web applications from scratch, translating complex UI/UX designs into pixel-perfect frontend experiences while backing them with robust, clean-architecture server systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faUser} size="3x"/>
                    <h3>Technical Leadership & Architecture</h3>
                    <p>Experienced in leading engineering teams, engineering reliable microservices, and setting up clean backend architectures. Proven track record of mentoring junior developers and driving agile delivery processes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud & DevOps</h3>
                    <p>Competent in managing cloud infrastructure, deploying applications securely, and maintaining source workflows within continuous integration and delivery environments to ensure high availability.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;