import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

export default (props) => {
  const { article } = props;

  const Card = styled('article')`
    background-image: url(${article.frontmatter.featuredImage.childImageSharp.fluid.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 1rem;
    box-shadow: 0.125rem 0.125rem 0.25rem rgba(0,0,0,0.5),
                -0.125rem 0.125rem 0.25rem rgba(0,0,0,0.5);
    font-weight: 600;
    transition: box-shadow 0.2s ease-in;
    padding: 0.5rem;
    border-radius: 0.5rem;
    position: relative;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.25;
      content: "";
      background-color: rgba(51, 46, 74, 0.75);
      border-radius: 0.5rem;
      transition: opacity 0.2s ease-in;
    }

    &:hover {
      box-shadow: 0.0625rem 0.0625rem 0.125rem rgba(0,0,0,0.5),
                  -0.0625rem 0.0625rem 0.125rem rgba(0,0,0,0.5);
      transition: box-shadow 0.2s ease-in;

      &:before {
        opacity: 0;
        transition: opacity 0.2s ease-in;
      }
    }

    p {
      width: 100%;
      font-size: 1rem;
      line-height: 1rem;
      letter-spacing: -0.05rem;
      text-decoration: none;
      color: white;
      text-shadow: 2px 2px 4px #332E4A,
                  -2px -2px 4px #332E4A,
                  -2px 2px 4px #332E4A,
                  2px -2px 4px #332E4A;
      padding: 0;
      margin-bottom: 0;
    }
  `;

  return (
    <Link to={article.fields.slug} style={{ textDecoration: 'none' }}>
      <Card>
        <p>
          {article.frontmatter.title}
        </p>
      </Card>
    </Link>
  );
};
