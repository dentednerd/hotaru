import React, { createRef } from 'react';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import timelineData from '../../data/timelineData';
import { classnames } from '../../helpers';
import Hero from '../../organisms/Hero';
import Screen from '../../organisms/Screen';
import AncientHistory from './ancienthistory';
import ExperienceScreen from './ExperienceScreen';

const ExperienceTemplate = () => {
  const refs = timelineData.reduce((acc) => {
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
      <Hero
        text="experience"
        passedRef={refHero}
        passedNextRef={refs[0]}
        icon={faHistory}
        scrollFunc={scroll}
      />

      {timelineData.map((job, index) => (
        <Screen
          className={classnames[index % 4]}
          ref={refs[index]}
          onClick={() => scroll(refs[index + 1])}
        >
          <ExperienceScreen job={job} index={index} />
        </Screen>
      ))}

      <AncientHistory
        passedRef={refs[timelineData.length]}
        passedTopRef={refHero}
      />
    </>
  );
};

export default ExperienceTemplate;
