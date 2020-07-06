import React, { useRef } from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import * as illustrations from '../../assets';
import timelineData from '../../data/timelineData';
import { classnames, stackMap } from '../../helpers';
import Screenshot from '../../atoms/Screenshot';
import Hero from '../../organisms/Hero';
import Screen from '../../organisms/Screen';
import AncientHistory from './ancienthistory';

const illusArray = Object.values(illustrations);

const GridContainer = styled('section')`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  margin: 0;
  padding: 0;

  @media(max-width: 767px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

const LeftHalf = styled('section')`
  grid-area: 1 / 1 / 3 / 2;
  padding: 0 1rem;
  text-align: right;

  @media(max-width: 767px) {
    grid-area: 1 / 1 / 2 / 2;
    text-align: center;
    width: 100%;
    padding: 0;
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
    grid-area: 2 / 1 / 3 / 2;
    text-align: right;
    padding: 0;
  }
`;

const JobTitle = styled('section')`
  text-align: right;
  margin-bottom: 1rem;
  padding: 0;

  @media (max-width: 767px) {
    margin: 2rem auto 0;
    text-align: left;
    line-height: 1.25rem;
  }
`;

const Illustration = styled('section')`
  max-width: 100vw;
  padding: 0;

  @media(max-width: 767px) {
    section {
      max-width: 90%;
    }
  }
`;

const ExperienceText = styled('section')`
  max-width: 100%;
  padding: 0;
  margin: 1rem 0;
  line-height: 1.25rem;
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
          <Illustration>
            <Screenshot src={illusArray[index]} alt={job.jobTitle} />
          </Illustration>
        </Fade>
    </LeftHalf>
    <RightHalf right>
      <Fade right>
        <ExperienceText>
          <p>{job.jobDesc}</p>
          <p style={{ fontFamily: 'Josefin Sans, sans-serif', fontWeight: '300' }}>
            {stackMap(job.skills)}
          </p>
        </ExperienceText>
      </Fade>
    </RightHalf>
  </GridContainer>
));

const ExperienceTemplate = () => {
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
    <>
      <Hero
        text="experience"
        passedRef={topSection}
        passedNextRef={section0}
        icon={faHistory}
        scrollFunc={scroll}
      />

      {mappedData.map((item, index) => (
        <Screen
          className={classnames[index % 4]}
          ref={refs[index]}
          onClick={() => scroll(refs[index + 1])}
        >
          {item}
        </Screen>
      ))}

      <AncientHistory
        passedRef={section6}
        passedTopRef={topSection}
      />
    </>
  );
};

export default ExperienceTemplate;
