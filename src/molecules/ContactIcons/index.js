import React from 'react';
import styled from '@emotion/styled';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
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
];

const ContactIcons = () => (
  <StyledContactIcons>
    {icons.map(icon => (
      <a href={icon.link} key={icon.link}>
        <FaIcon icon={icon.image} size="2x" />
      </a>
    ))}
  </StyledContactIcons>
);

export default ContactIcons;
