import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../tokens';

const StyledIntro = styled('section')`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: solid 1px ${colors.darkpurple};
`;

const PageIntro = ({ title, text }) => (
  <StyledIntro>
    <h2>{title}</h2>
    <p>{text}</p>
  </StyledIntro>
);

export default PageIntro;
