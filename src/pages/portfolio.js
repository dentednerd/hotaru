import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import Screen from '../Screen';
import Layout from '../templates/Layout';
import assets from '../templates/Portfolio/assets';
import portfolioData from '../data/portfolioData';
import Art from '../Art';
import Hero from '../Hero';
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
    this.scroll = this.scroll.bind(this);
  }

  scroll(ref) { // eslint-disable-line class-methods-use-this
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const classnames = {
      0: 'lemon',
      1: 'sage',
      2: 'pink',
      3: 'sky',
      4: 'lavender',
    };

    const refs = [
      this.section0,
      this.section1,
      this.section2,
      this.section3,
      this.section4,
      this.section5,
      this.section6,
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
            <h1>portfolio</h1>
            <p>
              <FontAwesomeIcon
                icon={faLaptopCode}
                style={{ margin: '0 0.5rem 0 0', opacity: 1 }}
              />
            </p>
          </Hero>
        </Screen>
        {portfolioData.map((project, index) => {
          return (
            <Screen
              ref={refs[index]}
              key={project.title}
              className={classnames[index % 5]}
              onClick={() => this.scroll(refs[index + 1])}
              backToTop={index === portfolioData.length - 1}
            >
              <Fade left>
                <a href={project.link}>
                  <Art src={assets[project.image]} alt={project.title} light />
                </a>
              </Fade>
              <Fade right>
                <p className="project-caption">{project.caption}</p>
                <ul style={{ alignSelf: 'flex-start', padding: 0 }}>
                  {project.stack.map((tech, stackIndex) => {
                    if (stackIndex === 0) {
                      return (
                        <li style={{ display: 'inline' }}>
                          <FontAwesomeIcon
                            icon={faAngleDoubleRight}
                            style={{ margin: '0 0.5rem 0 0', opacity: 1 }}
                          />
                          {tech}
                        </li>
                      );
                    }

                    return (
                      <li style={{ display: 'inline' }}>
                        <FontAwesomeIcon
                          icon={faAngleDoubleRight}
                          style={{ margin: '0 0.5rem 0 1rem', opacity: 1 }}
                        />
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </Fade>
            </Screen>
          );
        })}
      </Layout>
    );
  }
}
