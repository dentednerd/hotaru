import React from 'react';
import assets from './assets';
import portfolioData from '../../data/portfolioData';
import Project from '../../molecules/Project';

const projects = portfolioData.map(project => (
  <Project bgImage={assets[project.image]}>
    <a href={project.link}>
      <h2>{project.title}</h2>
    </a>
    <p className="project-caption">{project.caption}</p>
    <span style={{ fontVariant: 'small-caps', fontSize: '0.8rem' }}>
      {project.stack.map((tech, stackIndex) => {
        if (stackIndex === 0) {
          return `${tech}`;
        }
        return ` » ${tech} `;
      })}
    </span>
  </Project>
));

let portfolio = {};
portfolioData.map((project, index) => {
  portfolio[project.image] = projects[index];
});
console.log('*****portfolio', portfolio);

export default portfolio;
