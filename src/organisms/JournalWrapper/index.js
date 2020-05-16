import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('section')`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 0 4rem;

  @media(max-width: 1023px) {
    margin: 0;
  }
`;

const JournalWrapper = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default JournalWrapper;
