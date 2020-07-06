import React, { useRef } from 'react';
import Screen from '../../organisms/Screen';
import {
  ImageSvg,
  CodeSvg,
  DeveloperSvg
} from '../../assets';

import IntroScreen from './IntroScreen';
import Hero from './Hero';
import CallToAction from './CallToAction';

const HomeTemplate = () => {
  const refHero = useRef();
  const refIntro = useRef();
  const refCode = useRef();
  const refDeveloper = useRef();
  const refCTA = useRef();

  const scroll = (ref) => { // eslint-disable-line class-methods-use-this
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Screen
        className="purple"
        ref={refHero}
        onClick={() => scroll(refIntro)}
      >
        <Hero />
      </Screen>

      <IntroScreen
        colorScheme="sage"
        image={ImageSvg}
        passedRef={refIntro}
        passedNextRef={refCode}
        title="Hello, I'm Joey"
      >
        <p>I love making beautiful web apps for desktop and mobile.</p>
        <p>
          Right now I&apos;m working for&nbsp;
          <a href="http://www.ladbiblegroup.com/">the LADbible Group</a>
        .
        </p>
      </IntroScreen>

      <IntroScreen
        colorScheme="lemon"
        image={CodeSvg}
        passedRef={refCode}
        passedNextRef={refDeveloper}
        title="I started young."
        bottom
        right
      >
        <p>I wrote my first program in BASIC on my dad&apos;s Amiga 500 when I was seven. At fourteen, I made my first website. By fifteen, I'd taught myself HTML, CSS, Flash and Photoshop.</p>
      </IntroScreen>

      <IntroScreen
        colorScheme="sky"
        image={DeveloperSvg}
        passedRef={refDeveloper}
        passedNextRef={refCTA}
        title="Now it's my career."
        right
      >
        <p>
          In 2017, I won a scholarship at&nbsp;
          <a href="http://www.northcoders.com">Northcoders</a>
          &nbsp;and trained as a JavaScript developer. I started my first developer role three weeks after graduating.
        </p>
        <p>Now, my hobby is my career.</p>
      </IntroScreen>

      <Screen
        ref={refCTA}
        backToTop
        className="pink"
        onClick={() => scroll(refHero)}
      >
        <CallToAction />
      </Screen>
    </>
  );
};

export default HomeTemplate;
