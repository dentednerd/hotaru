import React from 'react';
import styled from '@emotion/styled';
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
    height: 100%;

    h2 {
      text-align: center;
    }

    @media (max-width: 767px) {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      position: relative;
    }
  `;

  const ProjectSection = styled('section')`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;

    @media(max-width: 767px) {
      background: rgba(255,255,255,0.75);
      justify-content: flex-end;
      align-items: flex-end;
      height: auto;

      &:after {
        top: 0;
        left: 1rem;
        bottom: 1.5rem;
        right: 1rem;
        position: absolute;
        opacity: 0.25;
        content: "";
        background-image: url(${illustrations[project.illustration]});
        background-blend-mode: lighten;
        background-size: contain;
        background-color: transparent;
        background-repeat: no-repeat;
        background-position: center bottom;
      }
    }
  `;

  const Title = styled('a')`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    grid-area: 1 / 1 / 3 / 2;
    padding: 0;
    text-align: center;

    &:hover {
      text-decoration: none;
    }
  `;

  const Illustration = styled(ProjectSection)`
    grid-area: 2 / 2 / 3 / 3;

    @media(max-width: 767px) {
      display: none;
    }
  `;

  return (
    <ProjectWrapper>
      <Title href={project.link}>
        <Screenshot src={assets[project.image]} alt={project.title} />
        <h2>{project.title}</h2>
      </Title>

      <ProjectSection>
        <Stack project={project} />
        <p>{project.caption}</p>
      </ProjectSection>

      <Illustration>
        <Screenshot src={illustrations[project.illustration]} alt="" />
      </Illustration>
    </ProjectWrapper>
  );
};
