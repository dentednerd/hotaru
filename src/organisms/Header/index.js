import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import NavIcons from '../../molecules/NavIcons';
import { JoeySvg } from '../../assets';
import { colors, fonts } from '../../tokens';

const StyledHeader = styled('header')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: ${colors.darkpurple};
  background-color: #fff;
  padding: 0;
  border-bottom: solid 1px ${colors.darkpurple};
  margin-bottom: 1rem;

  &.scrolled {
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 2rem);
    padding: 0 1rem;
    z-index: 3;
  }

  a {
    text-decoration: none;


    h1 {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      line-height: 1.5rem;
      font-family: ${fonts.cursive};
      color: ${colors.darkpurple};
      margin: 1rem 0;
      padding: 0;
    }
  }

  img {
    display: none;
  }

  section {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  @media (min-width: 1024px) {
    img {
      display: block;
      height: 2rem;
      margin-right: 1rem;
    }
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 112) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const headerClasses = [];

  if (scrolled) {
    headerClasses.push('scrolled');
  }

  return (
    <StyledHeader className={headerClasses.join()}>
      <section>
        <img src={JoeySvg} alt="Joey Imlay" />
        <Link to="/">
          <h1>Joey Imlay</h1>
        </Link>
      </section>
      <NavIcons />
    </StyledHeader>
  );
};

export default Header;
