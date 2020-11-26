import React from 'react';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import JournalTemplate from '../Journal';
import JournalPost from './JournalPost';
import CTALink from '../../atoms/CTALink';

const NextPrevious = styled('nav')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  margin: 1rem 0;
`;

export default ({ data, pageContext }) => {
  const { post } = data;

  return (
    <JournalTemplate data={data}>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>{post.frontmatter.title}</title>
        <meta
          name="description"
          content={post.excerpt}
        />
      </Helmet>
      <JournalPost post={post} />
      <NextPrevious>
        {pageContext.previous && (
          <CTALink to={pageContext.previous.fields.slug}>
            &laquo;&nbsp;
            {pageContext.previous.frontmatter.title}
          </CTALink>
        )}
        {pageContext.next && (
          <CTALink to={pageContext.next.fields.slug}>
            {pageContext.next.frontmatter.title}
            &nbsp;&raquo;
          </CTALink>
        )}
      </NextPrevious>
    </JournalTemplate>
  );
};

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
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
