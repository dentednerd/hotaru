import React from 'react';
import Fade from 'react-reveal/Fade';
import Image from '../../assets/image.svg';
import Split from '../../atoms/Split';
import Half from '../../atoms/Half';
import Art from '../../atoms/Art';

export default () => (
  <Split>
    <Half>
      <Fade left>
        <Art src={Image} alt="hello" />
      </Fade>
    </Half>
    <Half>
      <Fade right>
        <h2>Hello. I&apos;m Joey.</h2>
        <p>I love making beautiful web apps for desktop and mobile.</p>
        <p>
          Right now I&apos;m working for&nbsp;
          <a href="http://www.ladbiblegroup.com/">the LADbible Group</a>
        .
        </p>
      </Fade>
    </Half>
  </Split>
);
