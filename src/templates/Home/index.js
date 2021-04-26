import React from 'react';
import styled from '@emotion/styled';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faHistory } from '@fortawesome/free-solid-svg-icons/faHistory';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import CTALink from '../../atoms/CTALink';
import introData from '../../data/introData';
import * as images from '../../assets';
import { colors, fonts } from '../../tokens';

const HomeSection = styled('section')`
  text-align: center;
  margin-bottom: 4rem;

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  section,
  p {
    text-align: left;
  }

  img {
    object-fit: contain;
    max-width: 40%;
    margin: 0;
    ${props => props.index % 2 === 0 && 'margin-left: 1rem;'}
    ${props => props.index % 2 !== 0 && 'margin-right: 1rem;'}
  }

  img.ImageSvg {
    float: right;
    margin-left: 1rem;
  }

  img.CodeSvg {
    float: left;
    shape-outside: polygon(
      0% 0%,
      0.29% 100%,
      66.47% 100%,
      77.94% 40.14%,
      97.65% 39.91%,
      97.94% 0.75%
    );
  }

  img.DeveloperSvg {
    float: right;
    margin-left: 1rem;
    shape-outside: circle(192px at center center);
  }

  img.MobileSvg {
    display: none;

    @media (min-width: 768px) {
      display: block;
      float: left;
    }
  }
`;

const CallToAction = styled('section')`
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

const HomeTemplate = () => introData.map((screen, index) => (
  <HomeSection index={index}>
    <img
      className={screen.image}
      src={images[screen.image]}
      alt="Hello. I'm Joey."
    />
    <section dangerouslySetInnerHTML={{ __html: screen.content }} />
    {index === introData.length - 1 && (
    <CallToAction>
      {navItems.map(item => (
        <CTALink to={item.link} icon={item.icon}>
          {item.text}
        </CTALink>
      ))}
    </CallToAction>
    )}
  </HomeSection>
));

export default HomeTemplate;
