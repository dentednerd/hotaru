import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import MenuIcons from '../../molecules/MenuIcons';
import FaIcon from '../../atoms/FaIcon';
import { JoeySvg } from '../../assets';
import { colors, fonts, shadows } from '../../tokens';

const StyledHeader = styled('header')`
  position: relative;
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
    box-shadow: ${shadows.menuShadow};
  }
`;

const Identity = styled('section')`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  img {
    display: block;
    height: 2rem;
    margin-right: 1rem;
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
`;

const Menu = styled('div')`
  position: absolute;
  top: 56px;
  right: calc(-1rem - 1px);
  background-color: #fff;
  border: solid 1px ${colors.darkpurple};
  border-top: none;
  padding: 1rem;
  height: 13rem;
  width: 8rem;
  transform: scaleY(0);
  transition: transform 0.2s ease-in-out;
  transform-origin: center top;
  z-index: 9;

  &.open {
    transform: scaleY(1);
    transition: transform 0.2s ease-in-out;
    transform-origin: center top;
  }

  &.scrolled {
    border-right: none;
    box-shadow: ${shadows.menuShadow};
    right: 0;
  }

  @media (min-width: 1024px) {
    top: 70px;
    right: 0;
  }
`;

const MenuIcon = styled(FaIcon)`
  transform: scale(1.25);
  margin-right: 0.25rem;

  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, toggleIsOpen] = useState(false);

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

  if (isOpen) {
    headerClasses.push('open');
  }

  return (
    <StyledHeader className={headerClasses.join(' ')}>
      <Identity>
        <img src={JoeySvg} alt="Joey Imlay" />
        <Link to="/">
          <h1>Joey Imlay</h1>
        </Link>
      </Identity>
      <MenuIcon icon={faBars} onClick={() => toggleIsOpen(!isOpen)} />
      <Menu className={headerClasses.join(' ')}>
        <MenuIcons />
      </Menu>
    </StyledHeader>
  );
};

export default Header;
