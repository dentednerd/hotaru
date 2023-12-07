import React from 'react';
import styled from '@emotion/styled';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import CTALink from '../../atoms/CTALink';

const StyledFindMe = styled('section')`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  @media(min-width:1024px) {
    flex-flow: row nowrap;
    justify-content: space-around;
  }
`;

const FindMe = () => (
  <StyledFindMe>
      <CTALink
        href='https://github.com/dentednerd'
        icon={faExternalLinkAlt}
      >
        find me on GitHub
    </CTALink>
    <CTALink
      href='https://codepen.io/dentednerd'
      icon={faExternalLinkAlt}
    >
      find me on Codepen
    </CTALink>
    <CTALink
      href='https://www.frontendmentor.io/profile/dentednerd'
      icon={faExternalLinkAlt}
    >
      find me on Frontend Mentor
    </CTALink>
  </StyledFindMe>
);

export default FindMe;
