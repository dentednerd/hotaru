import React from 'react';
import styled from '@emotion/styled';
import Screenshot from '../../atoms/Screenshot';
import Stack from './stack';
import Caption from './caption'
import { assets } from '../../templates/Portfolio/assets';

const ProjectWrapper = styled('section')`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

export default ({ project }) => {
  return (
    <ProjectWrapper>
      <a href={project.link}>
        <Screenshot src={assets[project.image]} alt={project.title} />
      </a>
      <Stack project={project} />
      <Caption project={project} />
    </ProjectWrapper>
  );
};
