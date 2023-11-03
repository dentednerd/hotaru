import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import CTALink from '../../atoms/CTALink';
import { getProjectImage, stackMap } from '../../helpers';
import { colors } from '../../tokens';

const StyledProject = styled.article`
  margin: 0 0 1rem;
  padding: 0;
  border-bottom: solid 1px ${colors.constants.purple};

  a:hover {
    text-decoration: none;
  }

  .screenshot {
    margin-bottom: 1rem;
  }

  .caption {
    margin-bottom: 1rem;
  }

  .text {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;

    .stack {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      gap: 0.25rem;
      min-height: 2.25rem;
      margin: 0 0 1rem;
    }

    blockquote {
      width: 100%;
      max-width: calc(100vw - 4rem);
      margin: 0 auto 2rem;
    }
  }
`;

const Links = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  width: 100%;

  a {
    margin: 0 !important;
  }

  @media(min-width: 768px) {
    flex-flow: row wrap;
  }
`;

const CurrentProject = ({ project, images }) => {
  const projectImage = getProjectImage(project.title, images);
  return (
    <StyledProject>

      <GatsbyImage
        className="screenshot"
        image={projectImage}
        alt={project.title}
        loading="eager"
        backgroundColor={colors.constants.purple}
      />

      <section className="text">
        <h3>{project.title}</h3>

        <section
          className="caption"
          dangerouslySetInnerHTML={{ __html: project.caption }}
        />

        <section className="stack">
          {stackMap(project.stack)}
        </section>

        <Links>
          {project.links.map((link, i) => (
            <CTALink
              href={link.url}
              key={link.url}
              icon={faExternalLinkAlt}
              ghost={i >= 1}
            >
              {link.text}
            </CTALink>
          ))}
        </Links>

      </section>
    </StyledProject>
  );
}

export default CurrentProject;
