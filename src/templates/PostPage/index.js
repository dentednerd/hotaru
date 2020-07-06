import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import JournalWrapper from '../../organisms/JournalWrapper';
import JournalPost from '../../molecules/JournalPost';
import LeftBar from '../../molecules/LeftBar';
import RightBar from '../../molecules/RightBar';

export default ({ pageContext, data }) => {
  const { post, tags, categories } = data;

  return (
    <Layout>
      <JournalWrapper>
        <LeftBar categories={categories.group} />
        <JournalPost post={post} pageContext={pageContext} />
        <RightBar tags={tags} />
      </JournalWrapper>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        featuredImage {
          childImageSharp{
            fluid(maxWidth: 1920) {
              src
            }
          }
        }
      }
      fields {
        slug
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
