import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';
import Stack from './stack';
import Screenshot from '../../atoms/Screenshot';
import { assets } from '../../templates/Portfolio/assets';
import * as illustrations from '../../assets';

export default ({ project, index }) => {
  const ProjectWrapper = styled('section')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;

    h2 {
      text-align: center;
    }

    @media (max-width: 767px) {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      margin: 5vh auto;
      position: relative;
    }
  `;

  const Title = styled('section')`
    grid-area: 1 / 1 / 3 / 2;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 0;
    text-align: center;

    h2 {
      margin: 1rem 0;
    }

    section {
      margin: 0;
    }
  `;

  const ProjectText = styled('section')`
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;

    @media(max-width: 767px) {
      margin-top: 1rem;
      background: rgba(255,255,255,0.75);
      justify-content: flex-end;
      align-items: flex-end;
    }
  `;

  const StyledRelatedPosts = styled('section')`
    font-size: 0.75rem;
    margin: 1rem 0;
    text-align: center;

    a {
      color: #7a7495;
    }

    h3 {
      color: #7a7495;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 400;
      font-size: 0.8rem;
    }
  `;

  const Illustration = styled('section')`
    grid-area: 2 / 2 / 3 / 3;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    @media(max-width: 767px) {
      margin-top: 1rem;
    }
  `;

  return (
    <ProjectWrapper>
      <Title href={project.link}>
        <Fade left>
          <a href={project.link}>
            <Screenshot src={assets[project.image]} alt={project.title} />
            <h2>{project.title}</h2>
          </a>
        </Fade>
        {project.relatedPosts && (
          <Fade left>
            <StyledRelatedPosts>
              <h3>Read more in my journal:</h3>
              {project.relatedPosts.map(link => (
                <Link to={link.slug} key={link.name}>
                  {link.name}
                </Link>
              ))}
            </StyledRelatedPosts>
          </Fade>
        )}
      </Title>

      <Fade right>
        <ProjectText>
          <Stack project={project} />
          <p>{project.caption}</p>
        </ProjectText>
      </Fade>

      <Illustration>
        <Fade right>
          <Screenshot src={illustrations[project.illustration]} alt="" />
        </Fade>
      </Illustration>
    </ProjectWrapper>
  );
};
