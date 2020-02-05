import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import {
  Grid, Main, Tall, Square, Wide,
} from '../Grid';
import Screen from '../Screen';
import Layout from '../templates/Layout';
import { assets, thumbs } from '../templates/Portfolio/assets';
import portfolioData from '../data/portfolioData';
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
      this.section11,
      this.topSection,
    ];

    const techStack = stack => (
      stack.map((tech, stackIndex) => {
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
      })
    );

    const projectCaption = project => (
      <Wide style={{ alignItems: 'flex-start', textAlign: 'left' }}>
        <p>
          <a href={project.link}>{project.link}</a>
        </p>
        <p>{project.caption}</p>
      </Wide>
    );

    const projectTitleAndStack = project => (
      <Wide>
        <h2>{project.title}</h2>
        <ul style={{ padding: 0 }}>
          {techStack(project.stack)}
        </ul>
      </Wide>
    );

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
            <Grid>
              {project.mobile
                ? (<Tall href={project.link} style={{ backgroundImage: `url(${assets[project.image]})` }} />)
                : (<Main href={project.link} style={{ backgroundImage: `url(${assets[project.image]})` }} />)
              }
              {index % 2 === 0
                ? (
                  <>
                    {project.thumb && <Square style={{ backgroundImage: `url(${thumbs[project.thumb]})` }} />}
                    {projectTitleAndStack(project)}
                    {projectCaption(project)}
                  </>
                )
                : (
                  <>
                    {projectTitleAndStack(project)}
                    {project.thumb && <Square style={{ backgroundImage: `url(${thumbs[project.thumb]})` }} />}
                    {projectCaption(project)}
                  </>
                )
              }
            </Grid>
          </Screen>
        ))}
      </Layout>
    );
  }
}
