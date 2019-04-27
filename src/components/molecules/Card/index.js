import React from 'react';
import { Link } from 'gatsby';
import Img from "gatsby-image";
import CardImage from '../../atoms/CardImage';

import styled from '@emotion/styled';

const Card = props => {
  const { article } = props;

  const StyledCard = styled('article')`
    background: #fff;
    padding: 0;
    border: solid 1px #666;
    box-shadow: 3px 3px 3px #ccc;
    overflow: hidden;

    section {
      padding: 1em;
    }

    :hover {
      box-shadow: none;
    }

    img {
      height: 8em;
      min-width: 100%;
    }

    h2 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h3, p {
      color: #333;
    }

    h3 {
      font-weight: bold;
    }

    @media (max-width: 768px) {
      box-shadow: none;
      border: none;

      section {
        padding: 1em 0;
      }
    }
      `;

  return (
    <Link to={article.fields.slug}>
      <StyledCard>
        {article.frontmatter.featuredImage && (
          <CardImage imgSrc={article.frontmatter.featuredImage.childImageSharp.sizes.src} />
          )}
        <section>
          <h2>
              {article.frontmatter.title}
          </h2>
          <h3>{article.frontmatter.date}</h3>

          <p>{article.excerpt}</p>
        </section>
      </StyledCard>
    </Link>
  );
}

export default Card;
