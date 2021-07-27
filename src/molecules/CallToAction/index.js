import React from 'react';
import styled from '@emotion/styled';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faHistory } from '@fortawesome/free-solid-svg-icons/faHistory';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import CTALink from '../../atoms/CTALink';
import { colors, fonts } from '../../tokens';

const CTAGrid = styled('section')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;

  svg {
    color: #fff;
    width: 1rem;
    margin-right: 1rem;
  }

  a {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    background-color: ${colors.darkpurple};
    color: #fff;
    font-family: ${fonts.contrast};
    font-size: 16px;
    line-height: 16px;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    color: #fff;
    text-align: left;
    margin: 0;

    &:hover {
      text-decoration: none;
    }
  }
`;

const navItems = [
  {
    link: '/portfolio',
    icon: faLaptopCode,
    text: "See the projects I've worked on.",
  },
  {
    link: '/experience',
    icon: faHistory,
    text: 'Take a trip through my work history.',
  },
  {
    link: '/journal',
    icon: faPencilAlt,
    text: 'Read my coding journal.',
  },
  {
    link: '/showreel',
    icon: faYoutube,
    text: 'Watch me talking tech.',
  },
];

const CallToAction = () => (
  <CTAGrid>
    {navItems.map(item => (
      <CTALink to={item.link} icon={item.icon}>
        {item.text}
      </CTALink>
    ))}
  </CTAGrid>
);

export default CallToAction;
