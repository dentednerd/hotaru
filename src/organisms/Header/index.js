import React from 'react';
import { Link } from 'gatsby';
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

const Nav = styled('nav')`
  width: 100%;
  background-color: #332E4A;

  div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 0 1rem;
    max-width: 800px;
    margin: 0 auto;
    font-family: Josefin Sans, sans-serif;
    font-weight: 200;
    text-transform: uppercase;
    font-size: 12px;

    a {
      color: #fff;

      &:hover {
        text-decoration: none;
        text-shadow: 1px 1px 0.5rem #ffb8d0,
                    -1px 1px 0.5rem #ffb8d0,
                    1px -1px 0.5rem #ffb8d0,
                    -1px -1px 0.5rem #ffb8d0;
      }
    }

    @media(max-width: 767px) {
      padding: 0 0.5rem;
    }
  }
`;

const Header = ({ text }) => (
  <>
    <StyledHeader>
      <GlowHeading text={text} />
    </StyledHeader>
    <Nav>
      <div>
        <Link to="/">home</Link>
        <Link to="/portfolio">portfolio</Link>
        <Link to="/experience">experience</Link>
        <Link to ="/journal">journal</Link>
        <Link to="/showreel">showreel</Link>
      </div>
    </Nav>
  </>
);

export default Header;
