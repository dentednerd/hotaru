import React, { useRef } from 'react';
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
  const topSection = useRef();
  const section0 = useRef();
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();

  const refs = [
    section0,
    section1,
    section2,
    section3,
    section4,
    section5,
  ];

  const scroll = (ref) => { // eslint-disable-line class-methods-use-this
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      
      <Hero
        text="showreel"
        passedRef={topSection}
        passedNextRef={section0}
        icon={faYoutube}
        scrollFunc={scroll}
      />

      {showreel.map((item, index) => (
        <Screen
          className={classnames[index % 4]}
          ref={refs[index]}
          onClick={() => scroll(index === showreel.length - 1 ? topSection : refs[index + 1])}
          background={illusArray[index]}
          backToTop={index === showreel.length - 1}
        >
          {item}
        </Screen>
      ))}

    </Layout>
  );
}

export default Showreel;
