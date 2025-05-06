import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../../tokens'

const StyledFindMe = styled('section')`
  padding: 1rem 0;
  background-color: ${(props) => props.theme.bg2};

  .container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 1rem;
    margin: 0 auto;

    @media (min-width: ${breakpoints.md}px) {
      width: ${breakpoints.sm}px;
      flex-flow: row nowrap;
      justify-content: space-between;
      border: solid 1px red;
    }
  }
`

const FindMe = ({ children }) => (
  <StyledFindMe>
    <div className="container">{children}</div>
  </StyledFindMe>
)

export default FindMe
