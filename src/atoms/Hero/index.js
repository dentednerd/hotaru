import React from 'react';
import styled from '@emotion/styled';

const Hero = styled('div')`
  margin: 0 auto;
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
    h1 {
      height: 4rem;
      font-size: 4rem;
      line-height: 4rem;
    }
  }
`;

export default ({ children }) => (
  <Hero>
    {children}
  </Hero>
);
