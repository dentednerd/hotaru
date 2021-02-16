import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { colors } from '../../tokens';

const StyledCard = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${colors.yellow};
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.0625rem rgba(51, 46, 74, 0.75);
  transition: box-shadow 0.25s;
  overflow: hidden;

  &:hover {
    text-decoration: none;
    box-shadow: none;
    transition: box-shadow 0.25s;
  }

  h2 {
    color: ${colors.darkpurple};
    text-align: center;
    padding: 1rem;
    margin-bottom: 0;
    letter-spacing: 0;
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

const CardImage = styled('img')`
  width: 100%;
  height: 10rem;
  padding: 0;
  position: relative;
  object-fit: cover;
`;

const CardTitle = styled('div')`
  height: 4rem;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const Card = ({ post }) => (
  <StyledCard to={post.fields.slug}>
    <CardImage src={post.frontmatter.featuredImage.childImageSharp.fluid.src} alt={post.frontmatter.title} />
    <CardTitle>
      <h2>{post.frontmatter.title}</h2>
    </CardTitle>
  </StyledCard>
);

export default Card;
