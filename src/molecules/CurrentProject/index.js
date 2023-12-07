import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import CTALink from '../../atoms/CTALink';
import { stackMap } from '../../helpers';
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
      margin: 0.5rem 0;
    }

    blockquote {
      width: 100%;
      max-width: calc(100vw - 4rem);
      margin-bottom: 3rem;
    }
  }
`;

const Links = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;

  a {
    margin: 0 !important;
  }

  @media(min-width: 1024px) {
    flex-flow: row nowrap;
  }
`;

const CurrentProject = ({ project, image }) => (
  <StyledProject>

    <GatsbyImage
      className="screenshot"
      image={image}
      alt={project.title}
      loading="lazy"
    />

    <section className="text">
      <h3>{project.title}</h3>

      <section
        className="caption"
        dangerouslySetInnerHTML={{ __html: project.caption }}
      />

      {project.relatedPosts && (
        <blockquote>
          <p>
            Read more in my journal:&nbsp;
            {project.relatedPosts.map((link, index) => (
              <Fragment key={link.name}>
                <Link to={link.slug} >
                  {link.name}
                </Link>
                {(project.relatedPosts.length > 1 && index < (project.relatedPosts.length - 1)) && '; '}
              </Fragment>
            ))}
          </p>
        </blockquote>
      )}

      <Links>
        {project.links.map(link => (
          <CTALink
            href={link.url}
            key={link.url}
            icon={faExternalLinkAlt}
          >
            {link.text}
          </CTALink>
        ))}
      </Links>

      <section className="stack">
        {stackMap(project.stack)}
      </section>

    </section>
  </StyledProject>
);

export default CurrentProject;
