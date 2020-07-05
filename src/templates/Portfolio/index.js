import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import portfolioData from '../../data/portfolioData';
import { classnames } from '../../helpers';
import Hero from '../../atoms/Hero';
import GlowHeading from '../../atoms/GlowHeading';
import Screen from '../../organisms/Screen';
import Project from '../../molecules/Project';
import PortfolioExtras from './extras';

const PortfolioTemplate = () => {
  const topSection = useRef();
  const section0 = useRef();
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const section6 = useRef();
  const section7 = useRef();
  const section8 = useRef();
  const section9 = useRef();
  const section10 = useRef();
  const section11 = useRef();
  const section12 = useRef();

  const scroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const refs = [
    section0,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section9,
    section10,
    section11,
    section12
  ]

  return (
    <>
      <Screen
        className="purple"
        ref={topSection}
        onClick={() => scroll(section0)}
      >
        <Hero>
          <GlowHeading text="portfolio" />
          <p>
            <FontAwesomeIcon
              icon={faLaptopCode}
              style={{ margin: '0 0.5rem 0 0', opacity: 1 }}
            />
          </p>
        </Hero>
      </Screen>
      {portfolioData.map((project, index) => (
        <Screen
          ref={refs[index]}
          key={project.title}
          className={classnames[index % 4]}
          onClick={() => scroll(refs[index + 1])}
        >
          <Project project={project} index={index}/>
        </Screen>
      ))}
      <Screen
        ref={refs[portfolioData.length]}
        className={classnames[portfolioData.length % 4]}
        onClick={() => scroll(topSection)}
        backToTop
      >
        <PortfolioExtras />
      </Screen>
    </>
  );
};

export default PortfolioTemplate;
