import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import TagCard from './TagCard';
import JournalTemplate from '../Journal';

const JournalGrid = styled('section')`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TagPage = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges } = data.taggedPosts;

  return (
    <JournalTemplate data={data}>
      <h2>
        {`${tag} journal entries`}
      </h2>
      <JournalGrid>
        {edges.map(({ node }) => <TagCard post={node} key={node.fields.slug} />)}
      </JournalGrid>
    </JournalTemplate>
  );
};

export default TagPage;

export const pageQuery = graphql`
  query($tag: String) {
    taggedPosts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 90)
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
    tags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    categories: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2000
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
        nodes {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp{
                fluid(maxWidth: 630) {
                  src
                }
              }
            }
            tags
            category
          }
          fields {
            slug
          }
          excerpt(pruneLength: 90)
          html
        }
      }
    }
  }
`;
