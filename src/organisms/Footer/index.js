import React from 'react';
import styled from '@emotion/styled';
import IconLinks from '../../molecules/IconLinks';

const Footer = styled('footer')`
  width: 100%;
  height: 2em;

  a {
    color: #c30;
  }

  .icons {
    height: 2em;
  }
`;
export default () => (
  <Footer>
    <IconLinks />
  </Footer>
);
