import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';
import Code from '../../assets/code.svg';
import Art from '../../atoms/Art';

const TextSection = styled('section')`
  position: absolute;
  bottom: 0;
  right: 0;
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

    h2 {
      display: none;
    }
    
    p {
      text-align: center;
    }
  }
`;

export default (props) => (
  <>
    <Fade left>
      <Art src={Code} alt={props.title} light />
    </Fade>
    <Fade right>
      <TextSection>
        <h2>{props.title}</h2>
        <p>I wrote my first program in BASIC on my dad&apos;s Amiga 500 when I was seven. At fourteen, I made my first website. By fifteen, I'd taught myself HTML, CSS, Flash and Photoshop.</p>
      </TextSection>
    </Fade>
  </>
);
