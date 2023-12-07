import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { portfolioData } from '../data';
import CurrentProject from '../molecules/CurrentProject';
import PortfolioMenu from '../molecules/PortfolioMenu';
import PageHeader from '../molecules/PageHeader';
import FindMe from '../molecules/FindMe';
import Layout from '../templates/Layout';
import { Late } from '../assets/undraws';
import { getProjectImage } from '../helpers';

const PortfolioTemplate = ({ data }) => {
  const [currentProject, setCurrentProject] = useState('LADbible');
  const [currentImage, setCurrentImage] = useState(null);
  const [allImages, setAllImages] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentProject]);

  useEffect(() => {
    if (data) {
      setAllImages(data.allImageSharp.edges);
      setCurrentImage(getProjectImage({ title: currentProject } , data.allImageSharp.edges));
    }
  }, [data, currentProject, currentImage]);

  return (
    <Layout>
      <PageHeader>
        <Late />
        <>
          <p>This isn&apos;t a comprehensive collection of all the projects I&apos;ve ever worked on, but I reckon these are the most important ones.</p>
          <h2>Portfolio</h2>
        </>
      </PageHeader>
      {data
        ? (
          <>
            <CurrentProject project={portfolioData[currentProject]} image={currentImage} />
            {allImages && <PortfolioMenu setCurrentProject={setCurrentProject} images={allImages} />}
            <FindMe />
          </>
        ) : (
          <p>Loading...</p>
        )
      }
    </Layout>
  );
};

export default PortfolioTemplate;

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
  }
`;
