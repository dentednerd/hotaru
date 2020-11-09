import React from 'react';
import portfolioData from '../../data/portfolioData';
import Project from './Project';

const PortfolioTemplate = () => portfolioData.map(project => (
  <Project project={project} key={project.title} />
));

export default PortfolioTemplate;
