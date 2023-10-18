import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { portfolioData } from '../data';
import Project from '../molecules/PortfolioProject';
import PortfolioMenu from '../molecules/PortfolioMenu';
import PageHeader from '../molecules/PageHeader';
import FindMe from '../molecules/FindMe';
import Layout from '../templates/Layout';
import { Late } from '../assets/undraws';
import { getProjectImage } from '../helpers';

const PortfolioTemplate = () => {
  const [currentProject, setCurrentProject] = useState('LADbible');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentProject]);

  const { allImageSharp: { edges } } = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const projectImage = getProjectImage(portfolioData[currentProject], edges);

  return (
    <Layout>
      <PageHeader>
        <Late />
        <>
          <p>This isn&apos;t a comprehensive collection of all the projects I&apos;ve ever worked on, but I reckon these are the most important ones.</p>
          <h2>Portfolio</h2>
        </>
      </PageHeader>
      <Project project={portfolioData[currentProject]} image={projectImage} />
      <PortfolioMenu setCurrentProject={setCurrentProject} images={edges} />
      <FindMe />
    </Layout>
  );
};

export default PortfolioTemplate;
