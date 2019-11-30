import React from 'react';
import Fade from 'react-reveal/Fade';
import Image from '../../assets/image.svg';
import Art from '../../Art';

export default () => (
  <>
    <Fade left>
      <Art top src={Image} alt="Hello. I&apos;m Joey." />
    </Fade>
    <Fade right>
      <p style={{ textAlign: 'center' }}>I love making beautiful web apps for desktop and mobile.</p>
      <p style={{ textAlign: 'center' }}>
        Right now I&apos;m working for&nbsp;
        <a href="http://www.ladbiblegroup.com/">the LADbible Group</a>
      .
      </p>
    </Fade>
  </>
);
