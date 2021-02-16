import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faHistory } from '@fortawesome/free-solid-svg-icons/faHistory';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import FaIcon from '../../atoms/FaIcon';
import { colors } from '../../tokens';

const Nav = styled('nav')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0;
  color: ${colors.darkpurple};

  a {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    color: ${colors.darkpurple};
    margin-right: 0.5rem;

    &:last-of-type {
      margin-right: 0;
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

const NavIcons = () => (
  <Nav>
    {navItems.map(item => (
      <Link to={item.link} aria-label={item.ariaLabel} key={item.link}>
        <FaIcon icon={item.icon} />
      </Link>
    ))}
  </Nav>
);

export default NavIcons;
