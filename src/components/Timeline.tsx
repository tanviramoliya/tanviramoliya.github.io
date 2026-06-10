import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2024 – April 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Jeavio India Pvt. Ltd. (Remote)</h4>
            <p>
             Engineered a scalable enterprise design system, site builder, and analytics portal using React, TypeScript, and Tailwind CSS.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2023 – April 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Team Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">The One Technologies (Ahmedabad)</h4>
            <p>
              Led end-to-end web application development using Node.js and React, while mentoring junior developers and managing Agile sprint execution.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2021 – Feb 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Peerbits (Ahmedabad)</h4>
            <p>
              Delivered custom web applications using React.js in an Agile environment while providing technical guidance to junior team members
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2019 – Nov 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Web Developer & Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">Zignuts Technolab (Remote)</h4>
            <p>
            Developed web applications using Next.js and Node.js while managing cloud workflows within AWS and Bitbucket environments.
            </p>
          </VerticalTimelineElement>
           <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2019 – Sep 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Trainee Frontend & Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Zeronsec India Pvt. Ltd. (Junagadh)</h4>
            <p>
              Mastered core SDLC processes, advanced JavaScript, and state management using React and Redux Saga to build responsive user interfaces.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;