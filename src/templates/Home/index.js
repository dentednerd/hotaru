import React, { createRef } from 'react';
import Screen from '../../organisms/Screen';
import * as backgrounds from '../../assets';
import introData from '../../data/introData';
import { classnames } from '../../helpers';
import Footer from '../../organisms/Footer';
import IntroScreen from './IntroScreen';
import Hero from './Hero';
import CallToAction from './CallToAction';

const HomeTemplate = () => {
  const refs = introData.reduce((acc) => {
    acc.push(createRef());
    return acc;
  }, []);
  refs.push(createRef()); // for the final screen
  const refHero = createRef(); // for the hero screen

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
        noIcon
      >
        <div style={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'flex-start' }}>
          <CallToAction />
          <Footer />
        </div>
      </Screen>
    </>
  );
};

export default HomeTemplate;
