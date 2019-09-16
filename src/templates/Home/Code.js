import React from 'react';
import Fade from 'react-reveal/Fade';
import Code from '../../assets/code.svg';
import Split from '../../atoms/Split';
import Half from '../../atoms/Half';
import Art from '../../atoms/Art';

export default () => (
  <Split>
    <Half>
      <Fade left>
        <h2>I started young.</h2>
        <p>I wrote my first program in BASIC on my dad&apos;s Amiga 500 when I was seven. I made my first website at fourteen. Within a year, I had taught myself HTML and CSS and done two week&apos;s work experience with a web design startup where I learned basic Flash and Photoshop.</p>
      </Fade>
    </Half>
    <Half>
      <Fade right>
        <Art src={Code} alt="I started young." />
      </Fade>
    </Half>
  </Split>
);
