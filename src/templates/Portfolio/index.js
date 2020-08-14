import React from 'react';
import styled from '@emotion/styled';
import portfolioData from './portfolioData';
import Project from './Project';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

const StyledPortfolio = styled('section')`
  background: linear-gradient(90deg, #ffdadd 50%, #828dac 50%);

  @media(max-width: 767px) {
    background: #ffdadd;
  }
`;

const PortfolioTemplate = () => {
  return (
    <>
      <Header text="portfolio" />
      <StyledPortfolio>
        {portfolioData.map(project => (
          <Project project={project} />
        ))}
      </StyledPortfolio>
      <Footer />
    </>
  );
};

export default PortfolioTemplate;
