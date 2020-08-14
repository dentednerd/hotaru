import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const StyledTagCard = styled(Link)`
  display: block;
  width: 100%;
  margin-bottom: 2rem;

  &:hover {
    text-decoration: none;
  }
`;

const TagCard = ({ post }) => {
  const PostTitle = styled('div')`
    background-color: #332E4A;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: calc((50vw / 16) * 4.5);
    padding: 0;
    position: relative;

      &:before {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image: url(${post.frontmatter.featuredImage.childImageSharp.fluid.src});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-blend-mode: lighten;
      content: '';
      opacity: 0.5;
    }
    
    h2 {
      font-size: 2rem;
      color: #fff;
      text-shadow: 3px 3px 6px #332E4A, -3px -3px 6px #332E4A, -3px 3px 6px #332E4A, 3px -3px 6px #332E4A;
      text-align: center;
      line-height: 2rem;
      padding: 1rem;
      margin-bottom: 0;
      z-index: 2;
    }

    @media(max-width: 767px) {
      height: calc((100vw / 16) * 9) ;

      h2 {
        font-size: 1.5rem;
        line-height: 1.5rem;
      }
    }
  `;

  const PostContent = styled('div')`
    padding: 1rem;
    font-weight: 200;
    background-color: #fffacd;
    color: #7a7495;
    line-height: 1.5rem;

    &:hover {
      text-decoration: none;
    }
  `;

  return (
    <StyledTagCard to={post.fields.slug}>
      <PostTitle>
        <h2>{post.frontmatter.title}</h2>
      </PostTitle>
      <PostContent
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
    </StyledTagCard>
  );
};

export default TagCard;
