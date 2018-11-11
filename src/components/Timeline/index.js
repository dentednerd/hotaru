import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'; 

import './Timeline.css'

library.add(faBriefcase);
library.add(faGraduationCap);

const Timeline = () => {
  return (
    <section className="timeline">

      {/* <div className="timeline-item">
        <span className="date">The Future</span>
        <h2>
          Your team?
        </h2>
        <h3>
          My technical and creative skills could bring real value to your project
        </h3>
      </div> */}

      <a href="http://www.ladbible.com">
        <div className="timeline-item">

          <span className="date">Jul 2018 - present</span>
          <h2>
            LADbible Group
          </h2>
          <h3>
            <span className="icon">
            <FontAwesomeIcon icon={faBriefcase} />
            </span>
            Software Engineer
            </h3>
          <p className="desc">Rebuilding all company websites, learning deployment technologies, writing for company Medium publication.</p>
          <p className="skills">React, HTML, CSS, GraphQL, Koa, Docker, Kubernetes, CircleCI, Jenkins, BrowserStack</p>
        </div>
      </a>

      <a href="https://www.northcoders.com">
        <div className="timeline-item">

          <span className="date">May - Jun 2018</span>
          <h2>
            Northcoders
          </h2>
          <h3>
            <span className="icon">
            <FontAwesomeIcon icon={faBriefcase} />
            </span>
            Tutor (Saturdays)
            </h3>
          <p className="desc">Supporting Northcoders students on the part-time course with front end development.</p>
          <p className="skills">React, Redux, Redux-Thunk, Webpack, HTML, CSS</p>
        </div>
      </a>

      <a href="https://www.careicon.com">
        <div className="timeline-item">

          <span className="date">Aug 2017 - Aug 2018</span>
          <h2>
            Careicon
          </h2>
          <h3>
            <span className="icon">
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            Front End Developer
            </h3>
          <p className="desc">Currently under NDA.</p>
          <p className="skills">JavaScript, React, Redux, Redux-Saga, Storybook, Webpack, Jest, Git, HTML, CSS</p>
        </div>
      </a>

      <a href="https://www.northcoders.com">
        <div className="timeline-item">

          <span className="date">May - Aug 2017</span>
          <h2>
            Northcoders
          </h2>
          <h3>
            <span className="icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </span>
            Developer Bootcamp
          </h3>
          <p className="desc">12 weeks of intensive training in JavaScript and programming skills.</p>
          <p className="skills">JavaScript, Node.js, Express, MongoDB, SQL, React, Redux, Redux-Thunk, Webpack</p>
        </div>
      </a>

      <a href="https://www.codecademy.com">
        <div className="timeline-item">

          <span className="date">Jan - May 2017</span>
          <h2>
            Codecademy
          </h2>
          <h3>
            <span className="icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </span>
            Beginner Developer
          </h3>
          <p className="desc">Self-directed study in preparation for Northcoders bootcamp.</p>
          <p className="skills">JavaScript, Git, JQuery, Sass</p>
        </div>
      </a>

      <a href="https://freecodecamp.com">
        <div className="timeline-item">

          <span className="date">Jan - May 2017</span>
          <h2>
            FreeCodeCamp
          </h2>
          <h3>
            <span className="icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </span>
            Beginner Developer
          </h3>
          <p className="desc">Self-directed study in preparation for Northcoders bootcamp.</p>
          <p className="skills">Basic JavaScript, Object Oriented and Functional Programming, Basic Algorithm Scripting</p>
        </div>
      </a>

      <div className="timeline-item fade">
        <span className="date">2016 - 2017</span>
        <h2>
          Just Teachers
          </h2>
        <h3>
          <span className="icon">
            <FontAwesomeIcon icon={faBriefcase} />
          </span>
          Supply Primary Teacher
          </h3>
      </div>

      <div className="timeline-item fade">
        <span className="date">2014 - 2016</span>
        <h2>
          Manchester Metropolitan University
          </h2>
        <h3>
          <span className="icon">
            <FontAwesomeIcon icon={faGraduationCap} />
          </span>
          PGCE in Primary Education
          </h3>
      </div>

      <div className="timeline-item fade">
        <span className="date">2004 - 2008</span>
        <h2>
          University of Salford
          </h2>
        <h3>
          <span className="icon">
            <FontAwesomeIcon icon={faGraduationCap} />
          </span>
          BA (Hons) Popular Music and Recording
        </h3>
      </div>

      <div className="timeline-item fade">
        <span className="date">1997 - 2003</span>
        <h2>
          Wycombe High School
          </h2>
        <h3>
          <span className="icon">
            <FontAwesomeIcon icon={faGraduationCap} />
          </span>
          4 A-levels, 9 GCSEs
        </h3>
      </div>
    </section>
  )
}

export default Timeline