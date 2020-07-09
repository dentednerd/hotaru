import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

export default (props) => {
  const { article, backgroundColor } = props;

  const StyledCard = styled(Link)`
    display: flex;
    flex-flow: row nowrap;
    background-image: url(${article.frontmatter.featuredImage.childImageSharp.fluid.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: lighten;
    color: #fff;
    margin-bottom: 1rem;
    box-shadow: 0.125rem 0.125rem 0.25rem rgba(0,0,0,0.5),
                -0.125rem 0.125rem 0.25rem rgba(0,0,0,0.5);
    font-weight: 600;
    transition: box-shadow 0.2s ease-in;
    padding: 0.5rem;
    position: relative;
    text-decoration: none;
    opacity: 1;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: "";
      background-color: ${backgroundColor};
      opacity: 0.5;
      transition: opacity 0.2s ease-in;
      pointer-events: none;
    }

    &:hover {
      box-shadow: 0.0625rem 0.0625rem 0.125rem rgba(0,0,0,0.5),
                  -0.0625rem 0.0625rem 0.125rem rgba(0,0,0,0.5);
      text-decoration: none;
      transition: box-shadow 0.2s ease-in;

      &:before {
        opacity: 0.25;
        transition: opacity 0.2s ease-in;
      }
    }
  `;

  const CardTitle = styled('p')`
    color: #fff;
    z-index: 2;
    opacity: 1;
    font-size: 1rem;
    line-height: 1rem;
    letter-spacing: -0.05rem;
    text-decoration: none;
    text-shadow: 2px 2px 4px #332E4A,
                -2px -2px 4px #332E4A,
                -2px 2px 4px #332E4A,
                2px -2px 4px #332E4A;
    padding: 0;
    margin-bottom: 0;
  `;

  return (
    <StyledCard to={article.fields.slug}>
      <CardTitle>
        {article.frontmatter.title}
      </CardTitle>
    </StyledCard>
  );
};
