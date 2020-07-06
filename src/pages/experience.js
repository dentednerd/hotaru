import React, { Fragment, useRef } from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Screen from '../organisms/Screen';
import Layout from '../templates/Layout';
import Hero from '../atoms/Hero';
import Screenshot from '../atoms/Screenshot';
import GlowHeading from '../atoms/GlowHeading';
import timelineData from '../data/timelineData';
import timelineOldData from '../data/timelineOldData';
import { stackMap } from '../helpers';
import * as illustrations from '../assets';
import { classnames } from '../helpers';
import './global.css';

const illusArray = Object.values(illustrations);

const GridContainer = styled('section')`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
  width: 100%;

  @media(max-width: 767px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
  }
`;

const LeftHalf = styled('section')`
  grid-area: 1 / 1 / 3 / 2;
  padding: 0 1rem;
  text-align: right;

  @media(max-width: 767px) {
    text-align: center;
  }
`;

const RightHalf = styled('section')`
  grid-area: 1 / 2 / 3 / 3;
  padding: 0 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  @media(max-width: 767px) {
    text-align: right;
  }
`;

const JobTitle = styled('section')`
  text-align: right;
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    margin: 0 auto 2rem;
    text-align: left;
  }
`;

const AncientHistory = styled(GridContainer)`
  background-color: rgba(255, 250, 205, 0.75);

  &:after {
    top: 0;
    left: 1rem;
    bottom: 1.5rem;
    right: 1rem;
    position: absolute;
    opacity: 0.25;
    content: "";
    background-image: url(${illustrations.JapanSvg});
    background-blend-mode: lighten;
    background-size: contain;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const mappedData = timelineData.map((job, index) => (
  <GridContainer>
    <LeftHalf left>
        <JobTitle>
          <Fade left>
            <h2 style={{ marginBottom: 0 }}>{job.companyName}</h2>
            <h3>
              <FontAwesomeIcon
                icon={job.icon === 'work' ? faBriefcase : faGraduationCap}
                style={{ margin: '0 0.5rem 0 0', opacity: 1 }}
              />
              {job.jobTitle}
            </h3>
            <p style={{ display: 'inline-block' }}>{job.dates}</p>
          </Fade>
        </JobTitle>
        <Fade left>
          <Screenshot src={illusArray[index]} alt={job.jobTitle} />
        </Fade>
    </LeftHalf>
    <RightHalf right>
      <Fade right>
        <p>{job.jobDesc}</p>
        <p style={{ fontFamily: 'Josefin Sans, sans-serif', fontWeight: '300' }}>
          {stackMap(job.skills)}
        </p>
      </Fade>
    </RightHalf>
  </GridContainer>
));

const Experience = () => {
  const topSection = useRef();
  const section0 = useRef();
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const section6 = useRef();

  const refs = [
    section0,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
  ];

  const scroll = (ref) => { // eslint-disable-line class-methods-use-this
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <Screen
        className="purple"
        ref={topSection}
        onClick={() => scroll(section0)}
      >
        <Hero>
          <GlowHeading text="experience" />
          <FontAwesomeIcon
            icon={faHistory}
            style={{ margin: '0 0.5rem 0 0', opacity: 1 }}
          />
        </Hero>
      </Screen>

      {mappedData.map((item, index) => (
        <Screen
          className={classnames[index % 4]}
          ref={refs[index]}
          onClick={() => scroll(refs[index + 1])}
        >
          {item}
        </Screen>
      ))}

      <Screen
        backToTop
        className="lemon"
        ref={refs[refs.length - 1]}
        onClick={() => scroll(topSection)}
      >
        <AncientHistory>
          <LeftHalf>
            <Fade left>
              <JobTitle style={{ marginBottom: '1rem' }}>
                <h2 style={{ marginBottom: 0 }}>Before I was a developer...</h2>
              </JobTitle>
            </Fade>
          </LeftHalf>
          <RightHalf>
            {timelineOldData.map(job => (
              <Fade right>
                <h2 style={{ marginBottom: '0', textAlign: 'left' }}>{job.companyName}</h2>
                <h3 style={{ textAlign: 'left' }}>{job.jobTitle}</h3>
                <p style={{ textAlign: 'left' }}>{job.dates}</p>
              </Fade>
            ))}
          </RightHalf>
        </AncientHistory>
      </Screen>

    </Layout>
  );
};

export default Experience;
