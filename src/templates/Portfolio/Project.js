import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import FaIcon from '../../atoms/FaIcon';
import assets from './assets';
import { stackMap } from '../../helpers';
import { colors } from '../../tokens';

const StyledProject = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  width: calc(100% - 1rem);
  gap: 1rem;
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  line-height: normal;

  a:hover {
    text-decoration: none;
  }

  a.screenshot {
    display: block;
    position: relative;
    width: 100%;
    margin-bottom: 1rem;
    border: solid 1px ${colors.darkpurple};
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

  div.text {
    grid-column: 2/3;

    p,
    blockquote {
      font-size: 0.8rem;
      line-height: normal;
      margin-bottom: 0.8rem;
    }

    blockquote {
      width: calc(100% - 2rem);
      border-radius: 0;
      border: solid 1px ${colors.darkpurple};

      h4 {
        font-weight: 700;
      }
    }
  }

  div.meta {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;

    div.stack {
      margin: 1rem 0;
    }

    a {
      display: flex;
      flex-flow: row nowrap;

      svg {
        margin-left: 0.4rem;
      }
    }
  }
`;

export default ({ project }) => (
  <StyledProject>
    <div>
      <a href={project.links[0].url} className="screenshot">
        <img src={assets[project.images[0]]} alt={project.title} />
      </a>

      <div className="meta">
        <a href={project.links[0].url}>
          <h2>{project.title}</h2>
        </a>
        {project.links.map(link => (
          <a href={link.url} key={link.url}>
            {link.text}
            <FaIcon icon={faExternalLinkAlt} />
          </a>
        ))}
        <div className="stack">{stackMap(project.stack)}</div>
      </div>
    </div>

    <div className="text">
      <div
        className="caption"
        dangerouslySetInnerHTML={{ __html: project.caption }}
      />
      {project.relatedPosts && (
        <p>
          Read more in my journal:&nbsp;
          {project.relatedPosts.map(link => (
            <Link to={link.slug} key={link.name}>
              {link.name}
            </Link>
          ))}
        </p>
      )}
    </div>
  </StyledProject>
);
