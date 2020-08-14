import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import * as illustrations from '../../assets';
import { stackMap } from '../../helpers';
import Screenshot from '../../atoms/Screenshot';

const illusArray = Object.values(illustrations);

const ExperienceContainer = styled('section')`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  margin: 0;
  padding: 0;
  color: #7a7495;

  div.half {
    padding: 2rem;
    width: 50%;
  }

  p {
    max-width: 100%;
  }

  p.stack {
    font-family: Josefin Sans, sans-serif;
    font-weight: 200;
    font-variant: small-caps;
  }

  @media(max-width: 767px) {
    flex-flow: column nowrap;
    height: 100%;
    width: 100%;
    margin: 0 auto;

    div.half {
      padding: 1rem;
      width: calc(100% - 2rem);
    }
  }
`;

const JobTitle = styled('section')`
  text-align: right;
  margin: 0;
  padding: 0;

  h2 {
    margin-bottom: 0.5rem;
    font-variant: small-caps;
    text-shadow: 0.1rem 0.1rem 0.1rem #fff;
    letter-spacing: 0.1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 767px) {
    margin: 0;
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
  margin: 0;
  line-height: 1.25rem;
  color: #fff;
  font-weight: 200;

  @media(max-width: 767px) {
    color: #7a7495;
    font-size: 16px;
    line-height: 24px;
  }
`;

const ExperienceScreen = ({ job, index }) => (
  <>
    <ExperienceContainer>
      <div className="half">
        <JobTitle>
            <h2>{job.companyName}</h2>
            <h3>
              <FontAwesomeIcon
                icon={job.icon === 'work' ? faBriefcase : faGraduationCap}
                style={{ margin: '0 0.5rem 0 0', opacity: 1 }}
              />
              {job.jobTitle}
            </h3>
            <p style={{ textAlign: 'right', maxWidth: '100%' }}>{job.dates}</p>
        </JobTitle>
          <Illustration>
            <Screenshot src={illusArray[index]} alt={job.jobTitle} />
          </Illustration>
      </div>
      <div className="half">
          <ExperienceText>
            <p>{job.jobDesc}</p>
            <p className="stack">
              {stackMap(job.skills)}
            </p>
          </ExperienceText>
      </div>
    </ExperienceContainer>
  </>
);

export default ExperienceScreen;
