import React from 'react';
import WhiteProject from '../templates/Portfolio/WhiteProject';
import RedProject from '../templates/Portfolio/RedProject';
import PortfolioHeader from '../templates/Portfolio/PortfolioHeader';
import Layout from '../templates/Layout';
import portfolioData from '../templates/Portfolio/portfolioData';

const Portfolio = () => (
  <Layout>
    <PortfolioHeader />
    {portfolioData.map((project, index) => {
      if (index % 2 === 0) {
        return <WhiteProject key={project.title} project={project} />;
      }
      return <RedProject key={project.title} project={project} />;
    })}
  </Layout>

);

export default Portfolio;
