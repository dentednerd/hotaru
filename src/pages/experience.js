import React from 'react';
import styled from '@emotion/styled';
import { timelineData, educationData, interestsData } from '../data';
import ExperienceScreen from '../molecules/ExperienceScreen';
import PageHeader from '../molecules/PageHeader';
import Layout from '../templates/Layout';
import { Remote } from '../assets/undraws';
import { colors, fonts } from '../tokens';

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
    max-width: 100%;
    margin: 0;
    padding: 0;
  }

  h3, h4, ul li span {
    color: var(--color-text);
  }

  h3 {
    margin-bottom: 0;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const Experience = styled('section')`
  grid-column: 1 / 2;

  li {
    margin-bottom: 0.5rem;

    &:before {
      content: '» ';
    }
  }
`;

const Education = styled('aside')`
  grid-column: 1 / 2;

  h3,
  h4 {
    color: ${colors.text};
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
      color: ${colors.text};
      font-weight: 500;
    }

    &:before {
      content: '» ';
    }
  }
`;

const ExperienceTemplate = () => (
  <Layout>

    <CVLayout>
      <PageHeader style={{ gridColumn: '1 / 3' }}>
        <Remote />
        <>
          <p>
            Specialist in&nbsp;
            <a href="https://reactjs.org">React</a>
            ,&nbsp;
            <a href="https://reactnative.dev/">React Native</a>
            &nbsp;and front end web development.
            Mentor, speaker and tech writer.
            Facilitator of&nbsp;
            <a href="https://www.scrum.org/resources/what-is-a-scrum-master">Scrum</a>
            &nbsp;ceremonies.
          </p>
          <h2>Experience</h2>
        </>
      </PageHeader>
      <Experience>
        <h2>History</h2>
        {timelineData.map((job, index) => (
          <ExperienceScreen job={job} index={index} />
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
  </Layout>
);

export default ExperienceTemplate;
