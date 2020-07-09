import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';
import Image from '../../assets/image.svg';
import Art from '../../atoms/Art';

const TextSection = styled('section')`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1rem;

  p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    position: relative;
    background-color: transparent;
    padding: 0;

    h2 {
      display: none;
    }
    
    p {
      text-align: center;
    }
  }
`;

export default ({ title }) => (
  <>
    <Fade left>
      <Art
        src={Image}
        alt={title}
      />
    </Fade>

    <Fade right>
      <TextSection>
        <h2>{title}</h2>
        <p>I love making beautiful web apps for desktop and mobile.</p>
        <p>
          Right now I&apos;m working for&nbsp;
          <a href="http://www.ladbiblegroup.com/">the LADbible Group</a>
          .
        </p>
      </TextSection>
    </Fade>
  </>
);
