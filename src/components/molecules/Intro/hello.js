import React from 'react';
import IntroSection from '../../atoms/IntroSection';
import KeyData from '../../OrangeBox';

const Hello = props => (
  <IntroSection className="hello">
    <h2>{`Hello, I'm Jo.`}</h2>

    <KeyData latestBlog={props.latestBlog} />

    <p>{`I've been interested in coding ever since the age of seven, when I first started writing programs in BASIC on my dad's Amiga 500. When my family got our first PC a few years later, the first thing I made with it was my first website. Within a year, I had taught myself HTML and CSS and done two week's work experience with a web design startup where I learned basic Flash and Photoshop. But that was only the beginning.`}</p>
  </IntroSection>
);

export default Hello;
