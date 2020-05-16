import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

export default (props) => {
  const { article } = props;

  const Card = styled('article')`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background-image: url(${article.frontmatter.featuredImage.childImageSharp.fluid.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    max-width: 12rem;
    min-width: 100%;
    height: 12rem;
    margin-bottom: 1rem;
    box-shadow: 3px 3px 6px rgba(0,0,0,0.5),
                -3px -3px 6px rgba(0,0,0,0.5),
                -3px 3px 6px rgba(0,0,0,0.5),
                3px -3px 6px rgba(0,0,0,0.5);
    font-weight: 600;
    transition: box-shadow 0.1s ease-in;
    padding: 0;

    &:hover {
      box-shadow: 1px 1px 3px rgba(0,0,0,0.5),
                  -1px -1px 3px rgba(0,0,0,0.5),
                  -1px 1px 3px rgba(0,0,0,0.5),
                  1px -1px 3px rgba(0,0,0,0.5);
      transition: box-shadow 0.1s ease-in;
    }

    @media(max-width: 1023px) {
      height: 8rem;
    }

    h2 {
      width: 100%;
      font-size: 1rem;
      line-height: 1rem;
      letter-spacing: -0.05rem;
      text-decoration: none;
      color: white;
      text-shadow: 2px 2px 4px #332E4A, -2px -2px 4px #332E4A, -2px 2px 4px #332E4A, 2px -2px 4px #332E4A;
      text-align: center;
      padding: 0 1rem;
    }
  `;

  return (
    <Link to={article.fields.slug} style={{ textDecoration: 'none' }}>
      <Card>
        <h2>
          {article.frontmatter.title}
        </h2>
      </Card>
    </Link>
  );
};
