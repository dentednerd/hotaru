import React from 'react';
import styled from '@emotion/styled';

const StyledFindMe = styled('section')`
  padding: 1rem 0;
  background-color: ${props => props.theme.bg2};

  .container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 1rem;

    @media(min-width: 800px) {
      flex-flow: row nowrap;
      justify-content: space-around;
    }
  }
`;

const FindMe = ({ children }) => (
  <StyledFindMe>
    <div className="container">
      {children}
    </div>
  </StyledFindMe>
);

export default FindMe;
