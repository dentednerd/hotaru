import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faBriefcase, faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Screen from '../Screen';
import Layout from '../templates/Layout';
import Split from '../Split';
import Half from '../Half';
import Hero from '../Hero';
import timelineData from '../data/timelineData';
import timelineOldData from '../data/timelineOldData';
import './global.css';

const jobTitle = css`
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const mappedData = timelineData.map(job => (
  <Split>
    <Half className={jobTitle}>
      <Fade left>
        <h2 style={{ marginBottom: 0 }}>{job.companyName}</h2>
        <h3>
          <FontAwesomeIcon
            icon={job.icon === 'work' ? faBriefcase : faGraduationCap}
            style={{ margin: '0 0.5rem 0 0', opacity: 1 }}
          />
          {job.jobTitle}
        </h3>
        <p>{job.dates}</p>
      </Fade>
    </Half>
    <Half>
      <Fade right>
        <p>{job.jobDesc}</p>
        <p>
          <FontAwesomeIcon
            icon={faLaptopCode}
            style={{ fontSize: '0.9rem', margin: '0 0.5rem 0 0', opacity: 1 }}
          />
          {job.skills.map((tech, stackIndex) => {
            if (stackIndex === 0) {
              return `${tech}`;
            }
            return ` » ${tech} `;
          })}
        </p>
      </Fade>
    </Half>
  </Split>
));

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.topSection = React.createRef();
    this.section0 = React.createRef();
    this.section1 = React.createRef();
    this.section2 = React.createRef();
    this.section3 = React.createRef();
    this.section5 = React.createRef();
    this.section6 = React.createRef();
  }

  scroll(ref) { // eslint-disable-line class-methods-use-this
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const OldHistory = styled('div')`
      label: OldHistory;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      

      h2 {
        font-size: 1.25rem;
        line-height: 1.25rem;
      }

      h3 {
        font-size: 1.1rem;
      }
    `;

    return (
      <Layout>
        <Screen
          className="purple"
          ref={this.topSection}
          onClick={() => this.scroll(this.section0)}
        >
          <Hero>
            <h1>experience</h1>
            <FontAwesomeIcon
              icon={faHistory}
              style={{ margin: '0 0.5rem 0 0', opacity: 1 }}
            />
          </Hero>
        </Screen>
        <Screen
          className="sage"
          ref={this.section0}
          onClick={() => this.scroll(this.section1)}
        >
          {mappedData[0]}
        </Screen>
        <Screen
          className="lemon"
          ref={this.section1}
          onClick={() => this.scroll(this.section2)}
        >
          {mappedData[1]}
        </Screen>
        <Screen
          className="sky"
          ref={this.section2}
          onClick={() => this.scroll(this.section3)}
        >
          {mappedData[2]}
        </Screen>
        <Screen
          className="sage"
          ref={this.section3}
          onClick={() => this.scroll(this.section5)}
        >
          {mappedData[3]}
        </Screen>
        <Screen
          backToTop
          className="lemon"
          ref={this.section5}
          onClick={() => this.scroll(this.topSection)}
        >
          <OldHistory>
            {timelineOldData.map(job => (
              <Fragment>
                <h2 style={{ marginBottom: '0' }}>{job.companyName}</h2>
                <h3>{job.jobTitle}</h3>
                <p>{job.dates}</p>
              </Fragment>
            ))}
          </OldHistory>
        </Screen>
      </Layout>
    );
  }
}
