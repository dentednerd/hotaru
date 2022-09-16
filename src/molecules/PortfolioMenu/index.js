import React from 'react';
import styled from '@emotion/styled';
import { portfolioData } from '../../data';
import { fonts, colors } from '../../tokens';
import HoverCard from '../../atoms/HoverCard';
import { getProjectImage } from '../../helpers';

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
      grid-template-columns: repeat(3, 1fr);
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

const PortfolioMenu = ({ setCurrentProject, images }) => {
  if (!images) return null;

  return (
    <StyledMenu>
      <div className="grid">
        {projectList.sort().map(
          item => {
            const project = portfolioData[item];
            const projectImage = getProjectImage(project, images);
            return (
              <HoverCard
                text={project.title}
                image={projectImage}
                onClick={() => setCurrentProject(item)}
                key={item}
              />
            );
          }
        )}
      </div>
    </StyledMenu>
  );
};

export default PortfolioMenu;
