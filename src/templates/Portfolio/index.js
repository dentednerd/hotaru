import React from 'react';
import assets from './assets';
import portfolioData from '../../data/portfolioData';
import Art from '../../Art';

const projects = portfolioData.map(project => (
  <>
    <a href={project.link}>
      <Art src={assets[project.image]} alt={project.title} light />
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
  </>
));

let portfolio = {};
portfolioData.map((project, index) => {
  portfolio[project.image] = projects[index];
});
export default portfolio;
