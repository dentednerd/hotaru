import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Screen from '../organisms/Screen';
import Layout from '../templates/Layout';
import portfolioData from '../data/portfolioData';
import Hero from '../atoms/Hero';
import GlowHeading from '../atoms/GlowHeading';
import Project from '../molecules/Project';
import { classnames } from '../helpers';
import './global.css';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.topSection = React.createRef();
    this.section0 = React.createRef();
    this.section1 = React.createRef();
    this.section2 = React.createRef();
    this.section3 = React.createRef();
    this.section4 = React.createRef();
    this.section5 = React.createRef();
    this.section6 = React.createRef();
    this.section7 = React.createRef();
    this.section8 = React.createRef();
    this.section9 = React.createRef();
    this.section10 = React.createRef();
    this.section11 = React.createRef();
    this.scroll = this.scroll.bind(this);
  }

  scroll(ref) { // eslint-disable-line class-methods-use-this
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const refs = [
      this.section0,
      this.section1,
      this.section2,
      this.section3,
      this.section4,
      this.section5,
      this.section6,
      this.section7,
      this.section8,
      this.section9,
      this.section10,
      this.section11,
      this.topSection,
    ];

    return (
      <Layout>
        <Screen
          className="purple"
          ref={this.topSection}
          onClick={() => this.scroll(this.section0)}
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
            className={classnames[index % 5]}
            onClick={() => this.scroll(refs[index + 1])}
            backToTop={index === portfolioData.length - 1}
          >
          <Project project={project} />
         </Screen>
        ))}
      </Layout>
    );
  }
}
