import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import './IconLinks.css';

library.add(faLinkedin);
library.add(faTwitterSquare);
library.add(faGithubSquare);
library.add(faEnvelopeSquare);

const IconLinks = () => (
  <div className="icons">

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

  </div>
);

export default IconLinks;
