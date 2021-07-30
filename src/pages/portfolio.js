import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data';
import Project from '../molecules/PortfolioProject';
import PortfolioMenu from '../molecules/PortfolioMenu';
import PageHeader from '../molecules/PageHeader';
import { Late } from '../assets/undraws';

const PortfolioTemplate = () => {
  const [currentProject, setCurrentProject] = useState('ladbible');
  const categories = ['LBG', 'NC', 'JI'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentProject]);

  return (
    <>
      <PageHeader>
        <Late />
        <>
          <p>This isn&apos;t a comprehensive collection of all the projects I&apos;ve ever worked on, but I reckon these are the most important ones.</p>
          <h2>Portfolio</h2>
        </>
      </PageHeader>
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
