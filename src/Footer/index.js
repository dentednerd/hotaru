import React from 'react';
import styled from '@emotion/styled';
import IconLinks from '../IconLinks';

const Footer = styled('footer')`
  width: 100%;
  height: 2em;

  .icons {
    height: 2em;
  }
`;
export default () => (
  <Footer>
    <IconLinks />
  </Footer>
);
