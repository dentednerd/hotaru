import React, { createRef } from 'react';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import Screen from '../organisms/Screen';
import Layout from '../templates/Layout';
import showreel from '../templates/Showreel';
import Hero from '../organisms/Hero';
import * as illustrations from '../assets';
import { classnames } from '../helpers';
import './global.css';

const illusArray = Object.values(illustrations);

const Showreel = () => {
  const refs = showreel.reduce((acc) => {
    acc.push(createRef());
    return acc;
  }, []);
  refs.push(createRef()); // for the final screen
  const refHero = createRef(); // for the hero screen

  const scroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <Hero
        text="showreel"
        passedRef={refHero}
        passedNextRef={refs[0]}
        icon={faYoutube}
        scrollFunc={scroll}
      />
      {showreel.map((item, index) => (
        <Screen
          className={classnames[index % 4]}
          ref={refs[index]}
          onClick={() => scroll(index === showreel.length - 1 ? refHero : refs[index + 1])}
          background={illusArray[index]}
          backToTop={index === showreel.length - 1}
        >
          {item}
        </Screen>
      ))}
    </Layout>
  );
};

export default Showreel;
