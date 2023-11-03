import React from 'react';
import styled from '@emotion/styled';
import { timelineData, educationData, interestsData, qualificationData } from '../data';
import ExperienceScreen from '../molecules/ExperienceScreen';
import PageHeader from '../molecules/PageHeader';
import Layout from '../templates/Layout';
import { Remote } from '../assets/undraws';
import { colors, fonts } from '../tokens';

const CVLayout = styled('section')`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 1rem;
  }

  ul {
    list-style: none;
    max-width: 100%;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
    line-height: normal;

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

const CVSection = styled('section')`
  height: min-content;
  margin-bottom: 1rem;

  &:last-of-type {
    border-bottom: none;
  }

  li {
    font-size: 1.125rem;
    line-height: normal;
  }

  li:before {
    content: "";
    display: none;
  }

  h4 {
    font-size: 1.25rem;
    font-family: ${fonts.contrast};
    font-weight: 400;

    span {
      font-family: ${fonts.contrast};
      font-weight: 300;
    }
  }
`;

const ExperienceTemplate = () => (
  <Layout>
    <CVLayout className="container">
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
      <section>
        <h3>History</h3>
        {timelineData.map((job, index) => (
          <ExperienceScreen job={job} index={index} key={job.dates + job.companyName} />
        ))}
      </section>
      <section>
        <CVSection>
          <h3>Qualifications</h3>
          <ul>
            {qualificationData.map(q => (
              <li key={q.date + q.qualification}>
                <h4>{`${q.qualification}`}&nbsp;<span className="dates">{q.date}</span></h4>
              </li>
            ))}
          </ul>
        </CVSection>
        <CVSection>
          <h3>Education</h3>
          <ul>
            {educationData.map(job => (
              <li key={job.dates + job.companyName}>
                <h4>{job.companyName ? `${job.companyName}: ${job.jobTitle}` : `${job.jobTitle}`}&nbsp;<span className="dates">{job.dates}</span></h4>
              </li>
            ))}
          </ul>
        </CVSection>
        <CVSection>
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
        </CVSection>
        </section>

    </CVLayout>
  </Layout>
);

export default ExperienceTemplate;
