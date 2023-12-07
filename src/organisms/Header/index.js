import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import Identity from '../../atoms/Identity';
import MenuIcon from '../../atoms/MenuIcon';
import DarkToggle from '../../atoms/DarkToggle';
import MenuIcons from '../../molecules/MenuIcons';
import { shadows } from '../../tokens';

const StyledHeader = styled('header')`
  position: fixed;
  z-index: 9;
  width: calc(100% - 2rem);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 0 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0.15rem 0.15rem ${props => props.theme.navShadow};
`;

const Menu = styled('div')`
  position: absolute;
  top: 56px;
  right: calc(-1rem - 1px);
  background-color: ${props => props.theme.background};
  box-shadow: 0 0.15rem 0.15rem ${props => props.theme.navShadow};
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

    a {
      color: ${props => props.theme.text};
    }
  }
`;

const MobileNav = styled('nav')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background};

  @media(min-width: 1024px) {
    display: none;
  }
`;

const ButtonContainer = styled('section')`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
`;

const Header = ({ darkMode }) => {
  const [isOpen, toggleIsOpen] = useState(false);
  const headerClasses = [];
  if (isOpen) {
    headerClasses.push('open');
  }

  const theme = useTheme();

  return (
    <StyledHeader className={headerClasses.join(' ')} theme={theme}>
      <Identity />
      <DesktopNav>
        <MenuIcons />
      </DesktopNav>
      <ButtonContainer>
        <DarkToggle darkMode={darkMode} />
        <MobileNav>
          <MenuIcon
            isOpen={isOpen}
            toggleIsOpen={toggleIsOpen}
            headerClasses={headerClasses}
          />
          <Menu className={headerClasses.join(' ')} theme={theme}>
            <MenuIcons toggleIsOpen={toggleIsOpen} />
          </Menu>
        </MobileNav>
      </ButtonContainer>
    </StyledHeader>
  );
};

export default Header;
