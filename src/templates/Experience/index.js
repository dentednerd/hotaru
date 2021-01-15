import React from 'react';
import styled from '@emotion/styled';
import timelineData from '../../data/timelineData';
import educationData from '../../data/educationData';
import interestsData from '../../data/interestsData';
import ContactIcons from '../../molecules/ContactIcons';
import ExperienceItem from './ExperienceItem';
import { colors, fonts } from '../../tokens';

const CVLayout = styled('section')`
  display: grid;
  grid-template: auto 1fr auto / 1fr;
  grid-column-gap: 8px;

  @media (min-width: 480px) {
    grid-template: auto 1fr auto / 2fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-column-gap: 16px;
  }

  ul {
    list-style: none;
    line-height: 1.25rem;
    max-width: 100%;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 1.25rem;
    }
  }

  h3 {
    margin-bottom: 0;
  }
`;

const CVHeader = styled('header')`
  grid-column: 1 / 3;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: solid 1px ${colors.darkpurple};

  div {
    text-align: center;
  }

  span {
    display: none;

    @media (min-width: 800px) {
      display: block;
      padding: 0 0.5rem 0 0.25rem;
    }
  }
`;

const Experience = styled('main')`
  grid-column: 1 / 2;

  li {
    margin-bottom: 0.5rem;

    &:before {
      content: "» ";
    }
  }
`;

const Education = styled('aside')`
  grid-column: 1 / 2;

  h3, h4 {
    color: ${colors.darkpurple};
  }

  @media (min-width: 480px) {
    grid-column: 2 / 3;
  }
`;

const Interests = styled('footer')`
  grid-column: 1 / 3;

  li {
    margin-bottom: 0.5rem;

    span {
      font-family: ${fonts.headline};
      color: ${colors.darkpurple};
      font-weight: 500;
    }

    &:before {
      content: "» ";
    }
  }
`;

const ExperienceTemplate = () => (
  <CVLayout>
    <CVHeader>
      <h2>Joey Imlay is a software engineer in Manchester.</h2>
      <p>Specialising in React, React Native and front end web development. Currently training for scrum master accreditation.</p>
      <div>
        <ContactIcons />
      </div>
    </CVHeader>
    <Experience>
      <h2>Experience</h2>
      {timelineData.map((job, index) => (
        <ExperienceItem job={job} index={index} />
      ))}
    </Experience>
    <Education>
      <h2>Education</h2>
      <ul>
        {educationData.map(job => (
          <li>
            <h3>{`${job.companyName}: ${job.jobTitle}`}</h3>
            <h4>{job.dates}</h4>
          </li>
        ))}
      </ul>
    </Education>
    <Interests>
      <h2>Interests</h2>
      <ul>
        {interestsData.map(interest => (
          <li>
            <span>
              {interest.label}
              :&nbsp;
            </span>
            {interest.content}
          </li>
        ))}
      </ul>
    </Interests>
  </CVLayout>
);


export default ExperienceTemplate;
