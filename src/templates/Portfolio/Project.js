import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import CTALink from '../../atoms/CTALink';
import assets from './assets';
import { stackMap } from '../../helpers';
import { colors, shadows } from '../../tokens';

const ProjectWrapper = styled('section')`
  border-bottom: solid 1px ${colors.darkpurple};
  margin-bottom: 2rem;
  padding-bottom: 2rem;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: none;
  }
`;

const Caption = styled('section')`
  margin-bottom: 1rem;
`;

const StyledRelatedPosts = styled('blockquote')`
  h4 {
    font-weight: 500;
  }
`;

const Images = styled('div')`
  ${props => (props.length > 1 && !props.mobile) && `
    display: grid;
    grid-template-columns: repeat(${props.length + 3}, 1fr);
    grid-template-rows: repeat(${props.length + 3}, 1fr);
  `}
  ${props => (props.length <= 1 || props.mobile) && `
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  `}
  width: 100%;
  margin: 2rem auto;
`;

const Shot = styled('img')`
  border: solid 1px ${colors.darkpurple};
  box-shadow: ${shadows.dropShadow};
  ${props => !props.mobile && `grid-column: ${props.index + 1} / ${props.index + 5};`}
  ${props => !props.mobile && `grid-row: ${props.index + 1} / ${props.index + 5};`}
  object-fit: contain;
  ${props => props.mobile && 'height: 14rem;'}
  max-width: 100%;
`;

const VisitGrid = styled('section')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(50% - 1rem), 1fr));
  gap: 1rem;
  max-width: 100%;
`;

export default ({ project }) => (
  <ProjectWrapper>
    <h3>{project.title}</h3>
    <Caption dangerouslySetInnerHTML={{ __html: project.caption }} />
    {stackMap(project.stack)}
    {project.relatedPosts && (
      <StyledRelatedPosts>
        <h4>Read more in my journal:</h4>
        {project.relatedPosts.map(link => (
          <Link to={link.slug} key={link.name}>
            {link.name}
          </Link>
        ))}
      </StyledRelatedPosts>
    )}
    <Images length={project.images.length} mobile={project.mobile}>
      {project.images.map((image, index) => (
        <Shot
          index={index}
          mobile={project.mobile}
          src={assets[image]}
          alt={project.title}
          key={assets[image]}
        />
      ))}
    </Images>
    <VisitGrid>
      {project.links.map(link => (
        <CTALink href={link.url} key={link.url} icon={faExternalLinkAlt}>
          {link.text}
        </CTALink>
      ))}
    </VisitGrid>
  </ProjectWrapper>
);
