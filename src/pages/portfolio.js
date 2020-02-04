import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Screen from '../Screen';
import Layout from '../templates/Layout';
import assets from '../templates/Portfolio/assets';
import portfolioData from '../data/portfolioData';
import Screenshot from '../Screenshot';
import Hero from '../Hero';
import './global.css';

const ProjectCaption = styled('p')`
  text-align: center;
`;

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
      this.section7,
      this.section8,
      this.section9,
      this.section10,
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
        {portfolioData.map((project, index) => (
          <Screen
            ref={refs[index]}
            key={project.title}
            className={classnames[index % 5]}
            onClick={() => this.scroll(refs[index + 1])}
            backToTop={index === portfolioData.length - 1}
          >
            <Fade left>
              <a href={project.link}>
                <Screenshot src={assets[project.image]} alt={project.title} light />
              </a>
            </Fade>
            <Fade right>
              <ProjectCaption>
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  style={{ fontSize: '0.8rem', margin: '0 0.5rem 0 0', opacity: 1 }}
                />
                <a href={project.link}>{project.link}</a>
              </ProjectCaption>
              <ProjectCaption>{project.caption}</ProjectCaption>
              <ul style={{ padding: 0 }}>

                {project.stack.map((tech, stackIndex) => {
                  if (stackIndex === 0) {
                    return (
                      <li style={{ display: 'inline', marginRight: '0.5rem' }}>
                        <FontAwesomeIcon
                          icon={faLaptopCode}
                          style={{ fontSize: '0.8rem', margin: '0 0.5rem 0 0', opacity: 1 }}
                        />
                        {tech}
                      </li>
                    );
                  }

                  return (
                    <li style={{ display: 'inline', marginRight: '0.5rem' }}>
                      {`» ${tech}`}
                    </li>
                  );
                })}

              </ul>
            </Fade>
          </Screen>
        ))}
      </Layout>
    );
  }
}
