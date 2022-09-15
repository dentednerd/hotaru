import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import CTALink from '../../atoms/CTALink';
import assets from '../../assets/portfolioImages';
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

    @supports (aspect-ratio: 16/9) {
      aspect-ratio: 16/9;
    }

    @supports not (aspect-ratio: 16/9) {
      height: 0;
      padding-top: 56.25%;
    }

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

const Project = ({ project }) => {
  const thisImage = assets[project.images[0]];
  if (!thisImage) return null;

  return (
    <StyledProject>
      <div>
        <a href={project.links[0].url} className="screenshot">
          <img src={thisImage} alt={project.title} />
        </a>

        <div className="text">
          <a href={project.links[0].url}>
            <h2>{project.title}</h2>
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
          {project.links.map(link => (
            <CTALink href={link.url} key={link.url} icon={faExternalLinkAlt} style={{ marginBottom: '1rem', width: 'fit-content' }}>
              {link.text}
            </CTALink>
          ))}
          <div className="stack">{stackMap(project.stack)}</div>
        </div>
      </div>
    </StyledProject>
  );
};

export default Project;
