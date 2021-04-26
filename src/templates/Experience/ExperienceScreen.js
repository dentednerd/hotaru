import React from 'react'
import styled from '@emotion/styled'
import { stackMap } from '../../helpers'
import { colors, fonts } from '../../tokens'

const ExperienceContainer = styled('section')`
  margin: 0 0 1rem;
  padding-bottom: 1rem;
  border-bottom: solid 1px ${colors.darkpurple};

  p {
    margin-bottom: 0.5rem;
  }

  p.stack {
    font-family: ${fonts.headline};
  }

  img {
    max-width: 50%;
  }

  li {
    margin-bottom: 0.5rem;
  }
`

const ExperienceScreen = ({ job }) => (
  <ExperienceContainer>
    <h3>{`${job.companyName}: ${job.jobTitle}`}</h3>
    <h4>{job.dates}</h4>
    <ul>
      {job.jobDesc.map(item => (
        <li dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </ul>
    <p className="stack">{stackMap(job.skills)}</p>
  </ExperienceContainer>
)

export default ExperienceScreen
