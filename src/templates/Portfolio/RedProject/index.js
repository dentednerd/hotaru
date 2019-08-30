import React from 'react';
import styled from '@emotion/styled';
import assets from '../assets';

const RedWrapper = styled('div')`
  background-color: #c30;
  padding: 0;
  margin: 0;
  width: 100%;
  color: #fff;
`;

const ProjectSection = styled('section')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1em 0;

  section {
    margin-right: 2em;
    width: calc(50% - 1em);
  }

  a {
    width: 50%;
  }

  img {
    width: 100%;
  }

  .stack {
    text-transform: uppercase;
    font-size: 0.8em;
  }

  h2, p {
    color: #fff;
    margin-bottom: 1em;
  }

  @media (max-width: 768px) {
    padding: 0;
    flex-flow: column-reverse nowrap;

    section {
      width: 96vw;
      margin: 2vw;
    }

    a {
      width: 100%;
      margin-bottom: 1em;
    }
  }
`;

const RedProject = (props) => {
  const { project } = props;

  return (
    <RedWrapper>
      <ProjectSection>
        <section>
          <h2>{project.title}</h2>
          <p>{project.caption}</p>
          <p className="stack">
            {project.stack.map((tech, index) => {
              if (index === 0) {
                return `${tech}`;
              }
              return `» ${tech} `;
            })}
          </p>
        </section>
        <a href={project.link}>
          <img src={assets[project.image]} alt={project.title} />
        </a>
      </ProjectSection>
    </RedWrapper>
  );
};

export default RedProject;
