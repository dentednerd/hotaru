import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { colors } from '../../tokens';

const StyledTagCard = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 2rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.0625rem rgba(51, 46, 74, 0.75);
  transition: box-shadow 0.2s;

  &:hover {
    text-decoration: none;
    box-shadow: none;
    transition: box-shadow 0.2s;
  }
`;

const PostContent = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 1rem;
  font-weight: 200;
  line-height: 1.25rem;
  background-color: ${colors.yellow};
  color: ${colors.darkpurple};
  width: 40%;

  &:hover {
    text-decoration: none;
  }
`;

const TagCard = ({ post }) => {
  const PostTitle = styled('div')`
    background-color: ${colors.darkpurple};
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 60%;
    padding: 0;
    position: relative;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      ${post.frontmatter.featuredImage && `
        background-image: url(${post.frontmatter.featuredImage.childImageSharp.fluid.src});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-blend-mode: lighten;
      `}
      content: '';
      opacity: 0.5;
    }

    h2 {
      color: #fff;
      text-shadow: 3px 3px 6px ${colors.darkpurple},
                  -3px -3px 6px ${colors.darkpurple},
                  -3px 3px 6px ${colors.darkpurple},
                  3px -3px 6px ${colors.darkpurple};
      text-align: center;
      padding: 1rem;
      margin-bottom: 0;
      z-index: 2;
      letter-spacing: 0;
    }
  `;

  return (
    <StyledTagCard to={post.fields.slug}>
      <PostTitle>
        <h2>{post.frontmatter.title}</h2>
      </PostTitle>
      <PostContent
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
    </StyledTagCard>
  );
};

export default TagCard;
