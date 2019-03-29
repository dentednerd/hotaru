import React from 'react'
import styled from '@emotion/styled'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'; 

const StyledTimeline = styled('div')`
  width: 40%;
  font-size: 0.75em;

  h2 {
    margin: 0;
  }
`;

const TimelineItem = styled('div')`
  label: TimelineItem;
  margin: 0.5em 0;
  color: #fff;
  padding: 1em;
  background: #c30;

  &:last=child {
    margin-bottom: 0.2em;
  }

  h2 {
    text-align: left;
    color: #fff;
    font-size: 1.25em;
  }

  h3 {
    display: block;
    margin: 0.5em 0;
  }

  span.date {
    display: block;
    background: #fff;
    color: #c30;
    font-size: 1em;
    padding: 0.1em 0;
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.15em;
    margin-bottom: 0.5em;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
  }

  p.desc {
    margin: 1em 0;
  }

  p.skills {
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-size: 0.75em;
    font-weight: 300;
  }
`;

const FadeTimelineItem = styled('div')`
  label: FadeTimelineItem;
  background: #c30;
  margin-top: 0;
  margin-bottom: 0.1em;
  padding: 1em;
  width: 50%;
  float: right;
  color: rgb(255, 170, 125);

  h2 {
    color: rgb(255, 170, 125);
    font-size: calc(10px + 0.25em);
  }

  h3 {
    color: rgb(255, 170, 125);
    font-size: calc(10px + 0.25em);
  }

  span.date {
    display: block;
    background-color: rgb(255, 170, 125);
    color: #c30;
    font-size: 1em;
    padding: 0.1em 0;
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.15em;
    margin-bottom: 0.5em;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
  }
`;

library.add(faBriefcase);
library.add(faGraduationCap);

const Timeline = () => {
  return (
    <StyledTimeline>

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
        <TimelineItem>

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
        </TimelineItem>
      </a>

      <a href="https://www.northcoders.com">
        <TimelineItem>

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
        </TimelineItem>
      </a>

      <a href="https://www.careicon.com">
        <TimelineItem>

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
        </TimelineItem>
      </a>

      <a href="https://www.northcoders.com">
        <TimelineItem>

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
        </TimelineItem>
      </a>

      <a href="https://www.codecademy.com">
        <TimelineItem>

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
        </TimelineItem>
      </a>

      <a href="https://freecodecamp.com">
        <TimelineItem>

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
        </TimelineItem>
      </a>

      <FadeTimelineItem>
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
      </FadeTimelineItem>

      <FadeTimelineItem>
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
      </FadeTimelineItem>

      <FadeTimelineItem>
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
      </FadeTimelineItem>

      <FadeTimelineItem>
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
      </FadeTimelineItem>
    </StyledTimeline>
  )
}

export default Timeline