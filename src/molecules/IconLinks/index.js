import React from 'react';
import styled from '@emotion/styled';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin);
library.add(faTwitterSquare);
library.add(faGithubSquare);
library.add(faEnvelopeSquare);

export default ({ sidebar }) => {
  const IconLinks = styled('section')`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 2em;

    .svg-inline--fa {
      margin: 0;
      height: 2em;
      width: 2em;
      color: ${sidebar ? '#fff' : '#332E4A'};
      opacity: 0.5;
      transition: opacity 0.5s ease;
    }

    .svg-inline--fa:hover {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  `;

  return (
    <IconLinks>

      <a href="mailto:jo.imlay@gmail.com">
        <FontAwesomeIcon icon={faEnvelopeSquare} alt="send an email" />
      </a>

      <a href="https://www.linkedin.com/in/joanne-imlay-4a7a7056/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} alt="view LinkedIn profile" />
      </a>

      <a href="https://www.github.com/dentednerd" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithubSquare} alt=" view Github profile" />
      </a>

      <a href="https://www.twitter.com/dentednerd" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitterSquare} alt="view Twitter profile" />
      </a>

    </IconLinks>
  );
};
