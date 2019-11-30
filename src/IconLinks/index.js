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

const IconLinks = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .svg-inline--fa {
      margin: 0;
      height: 2em;
      width: 2em;
      color: #332E4A;
      opacity: 0.5;
      transition: opacity 0.5s ease;
    }

    .svg-inline--fa:hover {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
`;

export default () => (
  <IconLinks>

    <a href="mailto:jo.imlay@gmail.com">
      <FontAwesomeIcon icon={faEnvelopeSquare} />
    </a>

    <a href="https://www.linkedin.com/in/joanne-imlay-4a7a7056/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>

    <a href="https://www.github.com/dentednerd" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithubSquare} />
    </a>

    <a href="https://www.twitter.com/dentednerd" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitterSquare} />
    </a>

  </IconLinks>
);
