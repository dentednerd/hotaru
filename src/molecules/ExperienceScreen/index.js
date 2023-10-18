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

  .dates {
    font-family: ${fonts.contrast};
    font-size: 1rem;
    line-height: 1;
    letter-spacing: 0.125rem;
  }

  div.stack {
    font-family: ${fonts.headline};
  }

  img {
    max-width: 50%;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const ExperienceScreen = ({ job }) => (
  <ExperienceContainer>
    <h4>{`${job.companyName}: ${job.jobTitle}`}</h4>
    <p className="dates">{job.dates}</p>
    <ul>
      {job.jobDesc.map(item => (
        <li dangerouslySetInnerHTML={{ __html: item }} key={item} />
      ))}
    </ul>
    <div className="stack">{stackMap(job.skills)}</div>
  </ExperienceContainer>
);

export default ExperienceScreen;
