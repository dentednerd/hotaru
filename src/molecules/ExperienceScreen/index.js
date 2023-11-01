import React from 'react';
import styled from '@emotion/styled';
import { stackMap } from '../../helpers';
import { colors, fonts } from '../../tokens';

const ExperienceContainer = styled('section')`
  margin: 0 0 1rem;
  padding-bottom: 1rem;
  border-bottom: solid 1px ${colors.constants.purple};

  p {
    margin-bottom: 0.5rem;
  }

  .stack {
    display: flex;
    flex-flow: row wrap;
    font-family: ${fonts.headline};
  }

  img {
    max-width: 50%;
  }

  ul {
    margin: 1.5rem 0;
  }

  li {
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 0.5rem;
  }
`;

const ExperienceScreen = ({ job }) => (
  <ExperienceContainer>
    <h4>{`${job.companyName}: ${job.jobTitle}`}</h4>
    <p className="dates">{job.dates}</p>

    {job.jobDesc && (
      <ul>
        {job.jobDesc.map(item => (
          <li dangerouslySetInnerHTML={{ __html: item }} key={item} />
        ))}
      </ul>
    )}

    <div className="stack">{stackMap(job.skills)}</div>
  </ExperienceContainer>
);

export default ExperienceScreen;
