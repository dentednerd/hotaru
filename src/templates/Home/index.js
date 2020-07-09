import React, { createRef } from 'react';
import Screen from '../../organisms/Screen';
import * as backgrounds from '../../assets';
import introData from '../../data/introData';
import { classnames } from '../../helpers';

import IntroScreen from './IntroScreen';
import Hero from './Hero';
import CallToAction from './CallToAction';

const HomeTemplate = () => {
  const refs = [];
  introData.forEach(() => refs.push(createRef()));
  refs.push(createRef()); // for the final screen
  const refHero = createRef();

  const scroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Screen
        className="purple"
        ref={refHero}
        onClick={() => scroll(refs[0])}
      >
        <Hero />
      </Screen>

      {introData.map((screen, index) => (
        <IntroScreen
          key={screen.image}
          colorScheme={classnames[index % 4]}
          image={backgrounds[screen.image]}
          passedRef={refs[index]}
          passedNextRef={refs[index + 1]}
          content={screen.content}
          flipped={screen.flipped}
          bottom={screen.bottom}
          right={screen.right}
        />
      ))}

      <Screen
        ref={refs[refs.length - 1]}
        backToTop
        className={classnames[(introData.length + 1) % 4]}
        onClick={() => scroll(refHero)}
      >
        <CallToAction />
      </Screen>
    </>
  );
};

export default HomeTemplate;
