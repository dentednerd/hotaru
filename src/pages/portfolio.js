import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data';
import Project from '../molecules/PortfolioProject';
import PortfolioMenu from '../molecules/PortfolioMenu';

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
          <PortfolioMenu category={cat} setCurrentProject={setCurrentProject} />
        ))}
      </div>
    </>
  );
};

export default PortfolioTemplate;
