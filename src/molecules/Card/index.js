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
    box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
    overflow: hidden;
    height: 15em;
    font-weight: 600;

    :hover {
      box-shadow: none;
      text-decoration: none;

      h2 {
        text-decoration: underline;
      }
    }

    section {
      padding: 1em;
      text-decoration: none;
    }

    img {
      height: 3em;
      min-width: 100%;
    }

    h2 {
      font-size: 1em;
      line-height: 1em;
      margin-bottom: 0;
      letter-spacing: -0.05rem;
      height: 1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h3 {
      font-size: 0.75rem;
    }

    p {
      font-size: 0.75rem;
      line-height: 0.8rem;
      text-decoration: none;
      margin-top: 0.5rem;
    }

    @media (max-width: 768px) {
      box-shadow: none;
      height: 14rem;

      section {
        padding: 1em;
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
          <h3>
            {article.frontmatter.date}
          </h3>
          <p>
            {article.excerpt}
          </p>
        </section>
      </Card>
    </Link>
  );
};
