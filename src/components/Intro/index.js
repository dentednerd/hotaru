import React from 'react'
// import Pie from './Pie'
import IntroSection from '../atoms/IntroSection'
import Timeline from '../Timeline'
import KeyData from '../molecules/KeyData'
import styled from '@emotion/styled';

const IntroContainer = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
`

const StyledIntro = styled('div')`
  width: 50%;
`;

// .skill-icons.also {
//   margin-bottom: 0;
// }

// .skill-icons img {
//   height: 3em;
//   margin-right: 0.5em;
// }

// .skill-icons h2 {
//   margin-bottom: 0.75em;
// }
 // break out OrangeBox hello into a molecule

const Intro = props => {
  return (
    <IntroContainer>
      <StyledIntro>
        <IntroSection className="hello">
          <h2>{`Hello, I'm Jo.`}</h2>

          <KeyData latestBlog={props.latestBlog} />

          <p>{`I've been interested in coding ever since the age of seven, when I first started writing programs in BASIC on my dad's Amiga 500. When my family got our first PC a few years later, the first thing I made with it was my first website. Within a year, I had taught myself HTML and CSS and done two week's work experience with a web design startup where I learned basic Flash and Photoshop. But that was only the beginning.`}</p>
        </IntroSection>

        <IntroSection className="developer">
          <h2>{`I'm a front end developer.`}</h2>
          <p>In 2017, I was awarded a scholarship at <a href="http://www.northcoders.com">Northcoders</a>, funded by <a href="http://www.ey.com/gl/en/issues/business-environment/women-fast-forward">EY&apos;s Women. Fast Forward</a> initiative, to train as a JavaScript developer. I learned many new skills in an incredibly short amount of time, and I&apos;ve continued to learn and grow as a React developer in my first position since graduating. I&apos;m also really excited to be able to return to Northcoders as a tutor this summer, and share what I&apos;ve learned in the industry so far with new developers.</p>
        </IntroSection>

        <IntroSection className="looking-for">
          <h2>{`What am I looking for?`}</h2>
          <p>{`I love working with close-knit teams that encourage each other to produce high-quality projects that bring value to their users. At this stage of my career, my ideal role is one in which I can feel supported without having my hand held. I'd love the opportunity to learn new tech on the job, so if your project needs me to step outside of my comfort zone, I'm ready for the challenge.`}</p>
        </IntroSection>

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

        {/* <Pie /> */}

      </StyledIntro>
      <Timeline />
    </IntroContainer>
  )
}

export default Intro
