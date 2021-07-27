import React, { useState, useEffect } from 'react';
import portfolioData from '../../data/portfolioData';
import Project from './Project';
import Menu from './Menu';

const PortfolioTemplate = () => {
  const [currentProject, setCurrentProject] = useState('ladbible');
  const categories = ['LBG', 'NC', 'JI'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentProject]);

  return (
    <>
      <Project project={portfolioData[currentProject]} />
      <div>
        {categories.map(cat => (
          <Menu category={cat} setCurrentProject={setCurrentProject} />
        ))}
      </div>
    </>
  );
};

export default PortfolioTemplate;
