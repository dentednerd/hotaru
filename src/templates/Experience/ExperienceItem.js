import React from 'react';
import styled from '@emotion/styled';
import { stackMap } from '../../helpers';
import { colors, fonts } from '../../tokens';

const Item = styled('section')`
  margin-bottom: 1rem;
  padding-bottom: 0;
  border-bottom: solid 1px ${colors.darkpurple};

  p.stack {
    margin-bottom: 0.5rem;
    font-family: ${fonts.headline};
  }
`;

const ExperienceItem = ({ job }) => (
  <Item>
    <h3>{`${job.companyName}: ${job.jobTitle}`}</h3>
    <h4>{job.dates}</h4>
    <ul>
      {job.jobDesc.map(item => (
        <li dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </ul>
    <p className="stack">
      {stackMap(job.skills)}
    </p>
  </Item>
);

export default ExperienceItem;
