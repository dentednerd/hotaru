import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Hero = styled('div')`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;

  p {
    margin: 0;

    svg {
      display: inline;
      opacity: 1;
      margin: 0 1rem 0 0;
    }
  }

  @media (max-width:768px) {
    margin-top: 20vh;
  }
`;

export default () => (
  <Hero>
    <h1>Joanne Imlay</h1>
    <p>
      <FontAwesomeIcon
        icon={faCode}
      />
      front end developer
    </p>
    <p>
      <FontAwesomeIcon
        icon={faMapMarkerAlt}
      />
      Manchester, England
    </p>
  </Hero>
);
