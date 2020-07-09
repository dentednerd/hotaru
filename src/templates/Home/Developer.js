import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';
import Developer from '../../assets/developer.svg';
import Art from '../../atoms/Art';

const TextSection = styled('section')`
  position: absolute;
  top: 10%;
  right: 9%;
  width: 45%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1rem;

  p {
    max-width: 100%;
  }

  p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    position: relative;
    background-color: transparent;
    padding: 0;
    width: 100%;
    right: 0;

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
      <Art src={Developer} alt={title} />
    </Fade>
    <Fade right style={{ textAlign: 'left' }}>
      <TextSection>
        <h2>{title}</h2>
        <p>
          In 2017, I won a scholarship at&nbsp;
          <a href="http://www.northcoders.com">Northcoders</a>
          &nbsp;and trained as a JavaScript developer. I started my first developer role three weeks after graduating.
        </p>
        <p>Now, my hobby is my career.</p>
      </TextSection>
    </Fade>
  </>
);
