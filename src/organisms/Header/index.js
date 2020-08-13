import React from 'react';
import styled from '@emotion/styled';
import GlowHeading from '../../atoms/GlowHeading';
import { JoeySvg } from '../../assets';

const StyledHeader = styled('header')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: #332E4A;
  color: #fff;
  min-height: 25vh;
  padding: 0;
  background-image: url(${JoeySvg});
  background-blend-mode: lighten;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const Header = () => (
  <StyledHeader>
    <GlowHeading text="portfolio" />
  </StyledHeader>
);

export default Header;
