import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Tag from '../atoms/Tag';
import CTALink from '../atoms/CTALink';
import PageHeader from '../molecules/PageHeader';
import { Engineer } from '../assets/undraws';

const StyledJournalHome = styled('article')`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled('section')`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 1rem;
  width: 100%;
`;

const Journal = React.memo(({ data }) => {
  const { categories, tags } = data;
  const sortedCategories = categories.group.reverse();

  return (
    <StyledJournalHome>
      <PageHeader>
        <Engineer />
        <>
          <p>This is the place in which I collect my thoughts on tech - the projects I&apos;ve worked on, events I&apos;ve attended, and the cool things I&apos;ve learned along the way.</p>
          <h2>Journal</h2>
        </>
      </PageHeader>
      {sortedCategories.map(cat => (
        <Section key={cat.fieldValue}>
          <h3>
            {cat.fieldValue.charAt(0).toUpperCase() + cat.fieldValue.substring(1)}
          </h3>
          {cat.nodes.map(node => (
            <CTALink to={node.fields.slug} key={node.id} style={{ margin: '0 0 1rem' }}>
              {node.frontmatter.title}
            </CTALink>
          ))}
        </Section>
      ))}
      <section>
        <h3>Tags</h3>
        {tags.group.map(thisTag => (
          <Tag to={`/tags/${kebabCase(thisTag.fieldValue)}/`} key={thisTag.fieldValue}>
            {thisTag.fieldValue}
            <span>{thisTag.totalCount}</span>
          </Tag>
        ))}
      </section>
    </StyledJournalHome>
  );
});

export default Journal;

export const pageQuery = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
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
              childImageSharp {
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
