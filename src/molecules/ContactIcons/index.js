import React from 'react';
import styled from '@emotion/styled';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import FaIcon from '../../atoms/FaIcon';

const StyledContactIcons = styled.div`
  display: flex;

  a {
    margin-right: 1rem;

    svg {
      color: #fff;
      height: 3rem;
      width: 3rem;
    }
  }
`;

const icons = [
  {
    link: 'https://www.linkedin.com/in/joey-imlay-4a7a7056/',
    image: faLinkedin,
    alt: 'LinkedIn',
  },
  {
    link: 'https://github.com/dentednerd',
    image: faGithub,
    alt: 'Github',
  },
  {
    link: 'https://codepen.io/dentednerd',
    image: faCodepen,
    alt: 'Codepen',
  }
];

const ContactIcons = () => (
  <StyledContactIcons>
    {icons.map(icon => (
      <a href={icon.link} key={icon.link} aria-label={`Visit my ${icon.alt} profile`}>
        <FaIcon icon={icon.image} size="2x" alt={icon.alt} />
      </a>
    ))}
  </StyledContactIcons>
);

export default ContactIcons;
