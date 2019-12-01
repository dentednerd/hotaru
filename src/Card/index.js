import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import CardImage from './CardImage';

export default (props) => {
  const { article } = props;

  const Card = styled('article')`
    label: Card;
    background: #fffacd;
    padding: 0;
    margin-bottom: 1rem;
    box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
    height: 80px;
    font-weight: 600;
    transition: box-shadow 0.1s ease-in;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

    @media (max-width:1023px) {
      width: calc(100vw - 2rem);
    }

    :hover {
      box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
      transition: box-shadow 0.1s ease-in;

      section h2 {
        text-decoration-color: transparent;
      }
    }

    section {
      padding: 0 1rem;
      margin: 0;
      text-decoration: none;
      overflow: hidden;
    }

    img {
      height: 80px;
      max-height: 80px;
      width: 128px;
      min-width: 128px;
      max-width: 128px;
    }

    h2 {
      font-size: 1rem;
      line-height: 1rem;
      letter-spacing: -0.05rem;
      text-decoration: none;
      margin-bottom: 0;
    }

    h3 {
      font-size: 0.75rem;
    }

    @media (max-width: 768px) {
      box-shadow: none;
      height: auto;

      section {
        padding: 1rem;
        margin: 0;
        height: auto;
      }
    }
  `;

  return (
    <Link to={article.fields.slug}>
      <Card className="lemon">
        {article.frontmatter.featuredImage && (
          <CardImage imgSrc={`${article.frontmatter.featuredImage.childImageSharp.sizes.src}`} />
        )}
        <section>
          <h2>
            {article.frontmatter.title}
          </h2>
        </section>
      </Card>
    </Link>
  );
};
