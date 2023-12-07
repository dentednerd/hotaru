import React from 'react';
import { Link } from 'gatsby';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faHistory } from '@fortawesome/free-solid-svg-icons/faHistory';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import FaIcon from '../../atoms/FaIcon';
import { colors, fonts } from '../../tokens';

const Nav = styled('nav')`
  display: flex;
  flex-flow: column nowrap;
  padding: 0;
  color: inherit;
  background-color: ${props => props.theme.background};

  @media(min-width: 1024px) {
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`;

const NavItem = styled(Link)`
  display: grid;
  grid-template-columns: 2rem auto;
  align-items: center;
  margin-bottom: 1rem;
  font-family: ${fonts.headline};
  color: inherit;

  @media(min-width: 1024px) {
    padding: 0 1rem;
    margin-bottom: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    color: ${colors.constants.purple};
  }

  svg {
    transform: scale(1.25);
    color: inherit;
    margin-right: 1rem;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.accentBold};

    svg {
      transform: scale(1.5);
      color: ${props => props.theme.accentBold};
      transition: all 0.2s ease-in-out;
    }
  }
`;

const navItems = [
  {
    link: '/portfolio',
    icon: faLaptopCode,
    ariaLabel: 'Portfolio',
  },
  {
    link: '/experience',
    icon: faHistory,
    ariaLabel: 'Experience',
  },
  {
    link: '/journal',
    icon: faPencilAlt,
    ariaLabel: 'Journal',
  },
  {
    link: '/showreel',
    icon: faYoutube,
    ariaLabel: 'Showreel',
  },
];

const MenuIcons = ({ toggleIsOpen }) => {
  const theme = useTheme();

  return (
    <Nav theme={theme}>
      {navItems.map(item => (
        <NavItem
          to={item.link}
          aria-label={item.ariaLabel}
          key={item.link}
          onClick={() => toggleIsOpen ? toggleIsOpen(false) : {}}
          theme={theme}
        >
          <FaIcon icon={item.icon} />
          {item.ariaLabel}
        </NavItem>
      ))}
    </Nav>
  );
};

export default MenuIcons;
