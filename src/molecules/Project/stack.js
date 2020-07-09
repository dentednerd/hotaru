import React from 'react';
import styled from '@emotion/styled';
import { stackMap } from '../../helpers';

const StackWrapper = styled('p')`
  margin: 0 auto 0.5rem;
  font-family: Josefin Sans, sans-serif;
  font-weight: 300;
  text-align: center;
`;

const Stack = ({ project }) => (
  <StackWrapper>
    {stackMap(project.stack)}
  </StackWrapper>
);

export default Stack;
