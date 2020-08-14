import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import TagCard from './TagCard';
import JournalTemplate from '../../templates/Journal';

const TagTitle = styled('h2')`
  margin: 2rem 0;
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-shadow: 0.1rem 0.1rem 0.1rem #7a7495;

  @media(max-width: 767px) {
    padding: 0 1rem;
  }
`;

const TagPage = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges } = data.taggedPosts;

  return (
    <JournalTemplate data={data}>
      <TagTitle>
        {tag}
      </TagTitle>
      {edges.map(({ node }) => <TagCard post={node} key={node.fields.slug} />)}
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
          excerpt
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
