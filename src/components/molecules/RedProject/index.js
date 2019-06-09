import React from 'react'
import styled from '@emotion/styled'
import RedBand from "../../atoms/RedBand"

const ProjectSection = styled('section')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;

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
    margin-bottom: 1em;
  }

  @media (max-width: 768px) {
    flex-flow: column-reverse nowrap;

    section {
      width: 100%;
      margin-right: 0;
    }

    a {
      width: 100%;
      margin-bottom: 1em;
    }
  }
`

const RedProject = props => {
  const { project } = props

  return (
    <RedBand>
      <ProjectSection>
        <section>
          <h2>{project.title}</h2>
          <p>{project.caption}</p>
          <p className="stack">
            {project.stack.map((tech, index) => {
              if (index === 0) {
                return `${tech}`
              }
              return `» ${tech} `
            })}
          </p>
        </section>
        <a href={project.link}>
          <img src={project.image} alt={project.title} />
        </a>
      </ProjectSection>
    </RedBand>
  )
}

export default RedProject
