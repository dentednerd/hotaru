import React, { createRef } from 'react';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import portfolioData from '../../data/portfolioData';
import { classnames } from '../../helpers';
import Hero from '../../organisms/Hero';
import Screen from '../../organisms/Screen';
import Project from '../../molecules/Project';
import PortfolioExtras from './extras';

const PortfolioTemplate = () => {
  const scroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const refs = portfolioData.reduce((acc) => {
    acc.push(createRef());
    return acc;
  }, []);
  refs.push(createRef()); // for the final screen
  const refHero = createRef(); // for the hero screen

  return (
    <>
      <Hero
        text="portfolio"
        passedRef={refHero}
        passedNextRef={refs[0]}
        icon={faLaptopCode}
        scrollFunc={scroll}
      />

      {portfolioData.map((project, index) => (
        <Screen
          ref={refs[index]}
          key={project.title}
          className={classnames[index % 4]}
          onClick={() => scroll(refs[index + 1])}
        >
          <Project project={project} index={index} />
        </Screen>
      ))}
      <Screen
        ref={refs[portfolioData.length]}
        className={classnames[portfolioData.length % 4]}
        onClick={() => scroll(refHero)}
        backToTop
      >
        <PortfolioExtras />
      </Screen>
    </>
  );
};

export default PortfolioTemplate;
