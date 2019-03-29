import React, { Fragment } from 'react';
import IntroSection from '../../atoms/IntroSection';

const Skills = () => (
  <Fragment>
    <IntroSection className="skill-icons">
      <h2>{`Here's what I use every day.`}</h2>
      <a href="https://reactjs.org"><img src="react.png" alt="React" /></a>
      <a href="https://redux.js.org"><img src="redux.png" alt="Redux" /></a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"><img src="html5.png" alt="HTML5" /></a>
      <a href="https://developer.mozilla.org/en/docs/Web/CSS/CSS3"><img src="css3.png" alt="CSS3" /></a>
      <a href="https://nodejs.org/"><img src="nodejs.png" alt="NodeJS" /></a>
      <a href="https://es6-features.org"><img src="es6.png" alt="ES6" /></a>
      <a href="https://www.javascript.com/"><img src="js.png" alt="JavaScript" /></a>
      <a href="https://facebook.github.io/jest/"><img src="jest.png" alt="Jest" /></a>
      <a href="https://webpack.js.org/"><img src="webpack.png" alt="Webpack" /></a>
    </IntroSection>

    <IntroSection className="skill-icons also">
      <h2 style={{ fontSize: '1em' }}>{`(I've got experience with these too.)`}</h2>
      <a href="https://www.photoshop.com/"><img src="photoshop.png" alt="Photoshop" /></a>
      <a href="https://jquery.com/"><img src="jquery.png" alt="jQuery" /></a>
      <a href="https://angular.io/"><img src="angular.png" alt="Angular" /></a>
      <a href="https://www.mongodb.com/"><img src="mongodb.png" alt="MongoDB" /></a>
      <a href="https://expressjs.com/"><img src="express.png" alt="Express" /></a>
      <a href="https://www.php.net/"><img src="php.png" alt="PHP" /></a>
      <a href="https://twig.symfony.com"><img src="twig.png" alt="Twig" /></a>
      <a href="https://www.mysql.com/"><img src="mysql.png" alt="MySQL" /></a>
      <a href="https://gatsbyjs.org"><img src="gatsby.png" alt="Gatsby" /></a>
    </IntroSection>
  </Fragment>
);

export default Skills;
