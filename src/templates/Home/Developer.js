import React from 'react';
import Fade from 'react-reveal/Fade';
import Joey from '../../assets/joey.svg';
import Art from '../../Art';

export default () => (
  <>
    <Fade left>
      <Art src={Joey} alt="Now it's my career." light />
    </Fade>
    <Fade right style={{ textAlign: 'left' }}>
      <p>
        In 2017, I decided to turn my favourite hobby into a career. I won a scholarship at&nbsp;
        <a href="http://www.northcoders.com">Northcoders</a>
        &nbsp;to train as a JavaScript developer.
      </p>
      <p>Now I help to make the internet a better place, every day.</p>
    </Fade>
  </>
);
