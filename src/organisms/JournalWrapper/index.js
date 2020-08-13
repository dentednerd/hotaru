import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('section')`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 0 1rem;

  @media(max-width: 1023px) {
    grid-template-columns: 1fr;
    margin: 0;
    max-width: 100%;
  }
`;

const JournalWrapper = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default JournalWrapper;
