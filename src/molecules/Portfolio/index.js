import { GatsbyImage } from 'gatsby-plugin-image';
import { getProjectImage } from '../../helpers';
import { portfolioData } from '../../data';
import { usePortfolioImages } from './usePortfolioImages';

import "./Portfolio.scss";

const projectList = Object.keys(portfolioData);

const Portfolio = () => {
  const images = usePortfolioImages();
  if (!images) return null;

  return (
    <div className="portfolio">
      {projectList.map((item) => {
        const project = portfolioData[item];
        const projectImage = getProjectImage(project.title, images.edges);
        return (
          <a
            className="portfolio-item"
            href={project.links[0].url}
            key={project.title}
          >
            <GatsbyImage image={projectImage} alt={project.shortDesc} />
            <span className="title">{project.title}</span>
          </a>
        );
      })}
    </div>
  );
};

export default Portfolio;
