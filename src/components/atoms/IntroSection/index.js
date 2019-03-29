import React from 'react'
import styled from '@emotion/styled'

const StyledIntroSection = styled('section')`
  margin-bottom: 2em;
`;

const IntroSection = props => {
  return (
    <StyledIntroSection>
      {props.children}
    </StyledIntroSection>
  )
}

export default IntroSection