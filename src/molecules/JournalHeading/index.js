import React from 'react';
import styled from '@emotion/styled';

const JournalHeading = ({ center, children }) => {
  const StyledJournalHeading = styled('h2')`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: ${center ? 'center' : 'flex-start'};
    height: 2rem;

    @media(max-width: 767px) {
      text-align: center;
      align-items: center;
      height: 4rem;
    }
  `;

  return (
    <StyledJournalHeading>
      {children}
    </StyledJournalHeading>
  );
};

export default JournalHeading;
