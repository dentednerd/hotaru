import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { portfolioData } from '../data';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import CTALink from '../atoms/CTALink';
import CurrentProject from '../molecules/CurrentProject';
import PortfolioMenu from '../molecules/PortfolioMenu';
import PageHeader from '../molecules/PageHeader';
import FindMe from '../molecules/FindMe';
import Layout from '../templates/Layout';
import { Late } from '../assets/undraws';

const PortfolioTemplate = ({ data }) => {
  const [currentProject, setCurrentProject] = useState('LADbible');
  const [allImages, setAllImages] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentProject]);

  useEffect(() => {
    if (data) {
      setAllImages(data.allImageSharp.edges);
    }
  }, [data, currentProject]);

  return (
    <Layout>
      <div className="container">
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
              <CurrentProject project={portfolioData[currentProject]} images={allImages} />
              {allImages && <PortfolioMenu setCurrentProject={setCurrentProject} images={allImages} />}

            </>
          ) : (
            <p>Loading...</p>
          )
        }
      </div>

      <FindMe>
        <CTALink
          href='https://github.com/dentednerd'
          icon={faExternalLinkAlt}
        >
          find me on GitHub
        </CTALink>

        <CTALink
          href='https://codepen.io/dentednerd'
          icon={faExternalLinkAlt}
        >
          find me on Codepen
        </CTALink>

        <CTALink
          href='https://www.frontendmentor.io/profile/dentednerd'
          icon={faExternalLinkAlt}
        >
          find me on Frontend Mentor
        </CTALink>
      </FindMe>

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
