import React, { useRef } from 'react';
import Screen from '../../organisms/Screen';
import {
  ImageSvg,
  CodeSvg,
  DeveloperSvg
} from '../../assets';

import Hero from './Hero';
import Intro from './Intro';
import Code from './Code';
import Developer from './Developer';
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

      <Screen
        className="sage"
        onClick={() => {}}
        background={ImageSvg}
        ref={refIntro}
        onClick={() => scroll(refCode)}
      >
        <Intro title={"Hello. I'm Joey."}/>
      </Screen>
      <Screen
        ref={refCode}
        className="lemon"
        onClick={() => {}}
        background={CodeSvg}
        onClick={() => scroll(refDeveloper)}
      >
        <Code title={"I started young."}/>
      </Screen>
      <Screen
        ref={refDeveloper}
        className="sky"
        background={DeveloperSvg}
        onClick={() => scroll(refCTA)}
      >
        <Developer title={"Now it's my career."}/>
      </Screen>
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
