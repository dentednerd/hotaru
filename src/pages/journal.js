import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Layout from '../templates/Layout';
import JournalWrapper from '../organisms/JournalWrapper';
import JournalHeader from '../molecules/JournalHeader';
import LeftBar from '../molecules/LeftBar';
import JournalPost from '../molecules/JournalPost';
import RightBar from '../molecules/RightBar';

const Journal = ({ data: { posts, tags, categories } }) => {
  const latestPost = posts.edges[0].node;

  const JournalPostWrapper = styled('main')`
    grid-column: 4 / 10;

    @media(max-width: 1023px) {
      display: none;
    }
  `;

  return (
    <Layout>
      <JournalHeader />
      <JournalWrapper>
        <LeftBar categories={categories.group} />
        <JournalPostWrapper>
          <JournalPost post={latestPost} />
        </JournalPostWrapper>
        <RightBar tags={tags} />
      </JournalWrapper>
    </Layout>
  );
};

export default Journal;

export const pageQuery = graphql`
  query {
    posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
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
    tags: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2000
    ) {
      group(field: frontmatter___tags) {
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
