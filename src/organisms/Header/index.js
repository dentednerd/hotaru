import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import DarkToggle from '../../atoms/DarkToggle';
import MenuIcons from '../../molecules/MenuIcons';
import { JoeySvg } from '../../assets';
import { colors, fonts, shadows } from '../../tokens';

const StyledHeader = styled('header')`
  position: fixed;
  z-index: 9;
  width: calc(100% - 2rem);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-background);
  color: ${colors.text};
  padding: 0 1rem;
  margin-bottom: 1rem;
  box-shadow: ${shadows.darkShadow};
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
      color: ${colors.constants.purple};
      margin: 1rem 0;
      padding: 0;
    }
  }
`;

const Menu = styled('div')`
  position: absolute;
  top: 56px;
  right: calc(-1rem - 1px);
  background-color: var(--color-background);
  box-shadow: ${shadows.darkShadow};
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
    box-shadow: ${shadows.darkShadow};
    right: 0;
  }

  @media (min-width: 1024px) {
    top: 70px;
    right: 0;
  }
`;

const MenuIcon = styled('div')`
  width: 2rem;
  height: 1rem;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 0.25rem;
    width: 100%;
    background: ${colors.constants.purple};
    border-radius: 0.125rem;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  & span:nth-of-type(1) {
    top: 0;
  }

  & span:nth-of-type(2),
  & span:nth-of-type(3) {
    top: 0.5rem;
  }

  & span:nth-of-type(4) {
    top: 1rem;
  }

  &.open span:nth-of-type(1) {
    top: 1rem;
    width: 0%;
    left: 50%;
  }

  &.open span:nth-of-type(2) {
    transform: rotate(45deg);
  }

  &.open span:nth-of-type(3) {
    transform: rotate(-45deg);
  }

  &.open span:nth-of-type(4) {
    top: 1rem;
    width: 0%;
    left: 50%;
  }
`;

const Header = () => {
  const [isOpen, toggleIsOpen] = useState(false);
  const headerClasses = [];
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
        <DarkToggle />
      </Identity>
      <MenuIcon
        onClick={() => toggleIsOpen(!isOpen)}
        className={headerClasses.join(' ')}
      >
        <span />
        <span />
        <span />
        <span />
      </MenuIcon>
      <Menu className={headerClasses.join(' ')}>
        <MenuIcons toggleIsOpen={toggleIsOpen} />
      </Menu>
    </StyledHeader>
  );
};

export default Header;
