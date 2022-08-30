import React from 'react';
import styled from '@emotion/styled';
import { portfolioData } from '../../data';
import { fonts, colors } from '../../tokens';
import CTALink from '../../atoms/CTALink';

const projectList = Object.keys(portfolioData);

const StyledMenu = styled.div`
  margin-bottom: 2rem;

  h3 {
    color: ${colors.text};
    margin-bottom: 0.5rem;
  }

  div.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    max-width: calc(100vw - 2rem);

    @media (min-width: 768px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media (min-width: 1024px) {
      gap: 0.5rem;
    }

    button {
      background-color: ${colors.background};
      color: ${colors.text};
      font-family: ${fonts.headline};
      border: solid 1px ${colors.text};
      font-size: 0.7rem;
    }
  }
`;

const PortfolioMenu = ({ category, setCurrentProject }) => (
  <StyledMenu>
    <div className="grid">
      {projectList.map(
        item =>
          portfolioData[item].category === category && (
            <CTALink onClick={() => setCurrentProject(item)} key={item}>
              {portfolioData[item].title}
            </CTALink>
          )
      )}
    </div>
  </StyledMenu>
);

export default PortfolioMenu;
