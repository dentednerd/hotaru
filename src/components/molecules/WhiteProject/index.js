import React from 'react'
import styled from '@emotion/styled'
import WhiteBand from "../../atoms/WhiteBand"

const ProjectSection = styled('section')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;

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
    flex-flow: column nowrap;

    a {
      width: 100%;
      margin-bottom: 1em;
    }

    section {
      width: 100%;
    }
  }
`

const WhiteProject = props => {
  const { project } = props

  return (
    <WhiteBand>
      <ProjectSection>
        <a href={project.link}>
          <img src={project.image} alt={project.title} />
        </a>
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
      </ProjectSection>
    </WhiteBand>
  )
}

export default WhiteProject
