import React from 'react';
import Fade from 'react-reveal/Fade';
import Joey from '../../assets/joey.svg';
import Split from '../../atoms/Split';
import Half from '../../atoms/Half';
import Art from '../../atoms/Art';

export default () => (
  <Split>
    <Half>
      <Fade left>
        <Art src={Joey} alt="Now it's my career." />
      </Fade>
    </Half>
    <Half>
      <Fade right>
        <h2>Now it&apos;s my career.</h2>
        <p>
          In 2017, I decided to turn my favourite hobby into a career. I won a scholarship at&nbsp;
          <a href="http://www.northcoders.com">Northcoders</a>
          &nbsp;to train as a JavaScript developer.
        </p>
        <p>Now I help to make the internet a better place, every day.</p>
      </Fade>
    </Half>
  </Split>
);
