import React, { useState } from 'react';
import styled from '@emotion/styled';
import Identity from '../../atoms/Identity';
import MenuIcon from '../../atoms/MenuIcon';
import DarkToggle from '../../atoms/DarkToggle';
import MenuIcons from '../../molecules/MenuIcons';
import { colors, shadows } from '../../tokens';

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

const Menu = styled('div')`
  position: absolute;
  top: 56px;
  right: calc(-1rem - 1px);
  background-color: var(--color-background);
  box-shadow: ${shadows.darkShadow};
  padding: 1rem;
  height: 10rem;
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

const DesktopNav = styled('nav')`
  display: none;

  @media(min-width: 1024px) {
    display: inline-block;
    flex: 1;
  }
`;

const MobileNav = styled('nav')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  @media(min-width: 1024px) {
    display: none;
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
      <Identity />
      <DesktopNav>
        <MenuIcons />
      </DesktopNav>
      <DarkToggle />
      <MobileNav>
        <MenuIcon
          isOpen={isOpen}
          toggleIsOpen={toggleIsOpen}
          headerClasses={headerClasses}
        />
        <Menu className={headerClasses.join(' ')}>
          <MenuIcons toggleIsOpen={toggleIsOpen} />
        </Menu>
      </MobileNav>
    </StyledHeader>
  );
};

export default Header;
