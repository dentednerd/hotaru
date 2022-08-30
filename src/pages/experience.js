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
    font-family: ${fonts.contrast};
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.25rem;
    font-weight: 700;
    margin-bottom: 0;
  }

  p.date {
    font-family: ${fonts.headline};
    font-weight: 300;
    letter-spacing: -0.05rem;
    font-size: 1rem;
    line-height: 1rem;
  }

  li {
    line-height: 1.25rem;
    margin-bottom: 1rem;

    span {
      font-family: ${fonts.headline};
      color: ${colors.text};
      font-weight: 700;
    }

    &:before {
      content: '» ';
    }
  }
`;

const Experience = styled('section')`
  grid-column: 1 / 2;
`;

const Education = styled('aside')`
  grid-column: 1 / 2;

  h3,
  h4 {
    color: ${colors.text};
  }

  li:before {
    content: "";
    display: none;
  }

  @media (min-width: 480px) {
    grid-column: 2 / 3;
  }
`;

const Interests = styled('footer')`
  grid-column: 1 / 3;
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
        <h3>History</h3>
        {timelineData.map((job, index) => (
          <ExperienceScreen job={job} index={index} key={job.dates + job.companyName} />
        ))}
      </Experience>
      <Education>
        <h3>Education</h3>
        <ul>
          {educationData.map(job => (
            <li key={job.dates + job.companyName}>
              <h4>{`${job.companyName}: ${job.jobTitle}`}</h4>
              <p className="date">{job.dates}</p>
            </li>
          ))}
        </ul>
      </Education>
      <Interests>
        <h3>Interests</h3>
        <ul>
          {interestsData.map(interest => (
            <li key={interest.label}>
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
