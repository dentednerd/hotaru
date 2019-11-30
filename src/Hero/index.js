import React from 'react';
import styled from '@emotion/styled';

const Hero = styled('div')`
  margin: 25vh auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;

  p {
    margin: 0;

    svg {
      display: inline;
      opacity: 1;
      margin: 0 1rem 0 0;
    }
  }

  @media (max-width:768px) {
    margin-top: 20vh;
  }
`;

export default ({ children }) => (
  <Hero>
    {children}
  </Hero>
);
