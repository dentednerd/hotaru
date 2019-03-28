import React from 'react'
import styled from '@emotion/styled'

const StyledRecruiters = styled('div')`
  text-align: center;

  &span {
    font-weight: 600;
    font-family: 'Roboto Slab', serif;
    color: white;
  }
`;

const Recruiters = () => {
  return (
    <StyledRecruiters>
      <h2>Recruiters...</h2>
      I am <span>not open</span> to new opportunities right now.
    </StyledRecruiters>
  )
}

export default Recruiters