import React from 'react';
import styled from '@emotion/styled';

const StyledIntroSection = styled('section')`
  margin-bottom: 2em;
`;

const IntroSection = (props) => {
  const { children } = props;
  return (
    <StyledIntroSection>
      {children}
    </StyledIntroSection>
  );
};

export default IntroSection;
