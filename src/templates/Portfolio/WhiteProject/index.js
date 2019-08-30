import React from 'react';
import styled from '@emotion/styled';
import assets from '../assets';

const WhiteWrapper = styled('div')`
  background-color: #fff;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const ProjectSection = styled('section')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1em 0;

  a {
    margin-right: 2em;
    width: calc(50% - 1em);
  }

  img {
    width: 100%;
  }

  section {
    width: 50%;
  }

  .stack {
    text-transform: uppercase;
    font-size: 0.8em;
  }

  h2, p {
    margin-bottom: 1em;
  }

  @media (max-width: 768px) {
    padding: 0;
    flex-flow: column nowrap;

    a {
      width: 100%;
      margin-bottom: 1em;
    }

    section {
      width: 96vw;
      padding: 0 2vw;
    }
  }
`;

const WhiteProject = (props) => {
  const { project } = props;

  return (
    <WhiteWrapper>
      <ProjectSection>
        <a href={project.link}>
          <img src={assets[project.image]} alt={project.title} />
        </a>
        <section>
          <h2>{project.title}</h2>
          <p>{project.caption}</p>
          <p className="stack">
            {project.stack.map((tech, index) => {
              if (index === 0) {
                return `${tech}`;
              }
              return ` » ${tech} `;
            })}
          </p>
        </section>
      </ProjectSection>
    </WhiteWrapper>
  );
};

export default WhiteProject;
