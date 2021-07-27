import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
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
`;

const NavItem = styled(Link)`
  display: grid;
  grid-template-columns: 2rem auto;
  align-items: center;
  margin-bottom: 1rem;
  font-family: ${fonts.headline};
  color: inherit;

  svg {
    transform: scale(1.25);
    color: inherit;
    margin-right: 1rem;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    text-decoration: none;
    color: ${colors.link};

    svg {
      transform: scale(1.5);
      color: ${colors.link};
      transition: all 0.2s ease-in-out;
    }
  }
`;

const navItems = [
  {
    link: '/',
    icon: faCode,
    ariaLabel: 'Home',
  },
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

const MenuIcons = () => (
  <Nav>
    {navItems.map(item => (
      <NavItem
        to={item.link}
        aria-label={item.ariaLabel}
        key={item.link}
        style={{ marginBottom: '1rem' }}
      >
        <FaIcon icon={item.icon} />
        {item.ariaLabel}
      </NavItem>
    ))}
  </Nav>
);

export default MenuIcons;
