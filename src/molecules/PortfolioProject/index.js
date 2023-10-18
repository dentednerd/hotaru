import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import CTALink from '../../atoms/CTALink';
import { stackMap } from '../../helpers';
import { colors } from '../../tokens';

const StyledProject = styled.section`
  margin: 0 0 1rem;
  padding: 0;
  border-bottom: solid 1px ${colors.constants.purple};

  a:hover {
    text-decoration: none;
  }

  a.screenshot {
    display: block;
    position: relative;
    width: 100%;
    margin-bottom: 1rem;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      min-height: 100%;
      min-width: 100%;
      max-width: 100%;
      object-fit: cover;
    }
  }

  div.caption {
    margin-bottom: 1rem;
  }

  div.text {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;

    div.stack {
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

const Project = ({ project, image }) => (
  <StyledProject>
    <div>
      <a href={project.links[0].url} className="screenshot">
        <GatsbyImage image={image} alt={project.title} />
      </a>

      <div className="text">
        <a href={project.links[0].url}>
          <h3>{project.title}</h3>
        </a>
        <div
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
        <div className="stack">{stackMap(project.stack)}</div>
      </div>
    </div>
  </StyledProject>
);

export default Project;
