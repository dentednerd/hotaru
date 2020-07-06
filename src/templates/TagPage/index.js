import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import JournalWrapper from '../../organisms/JournalWrapper';
import Card from '../../molecules/Card';
import LeftBar from '../../molecules/LeftBar';
import RightBar from '../../molecules/RightBar';

const TagPageWrapper = styled('main')`
  grid-column: 4 / 10;
  margin-top: 1rem;

  @media(max-width: 1023px) {
    order: 1;
    grid-column: 2 / 12;
  }

  section {
    background: #fffacd;
    padding: 1rem;

    a:last-child article {
      margin-bottom: 0;
    }
  }
`;

const TagPage = ({ pageContext, data }) => {
  console.log('Tag Page data', data);
  const { tag } = pageContext;
  const { edges } = data.taggedPosts;
  const { tags, categories } = data;

  return (
    <Layout>
      <JournalWrapper>
        <LeftBar categories={categories.group} />
        <TagPageWrapper>
          <h2 style={{ textAlign: 'center' }}>posts about {tag}</h2>
          <section style={{ background: '#fffacd', padding: '1rem' }}>
            {edges.map(({ node }) => <Card article={node} key={node.id} />)}
          </section>
        </TagPageWrapper>
        <RightBar tags={tags} />
      </JournalWrapper>
    </Layout>
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
  }
`;
