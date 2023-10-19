import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Tag from '../atoms/Tag';
import HoverCard from '../atoms/HoverCard';
import PageHeader from '../molecules/PageHeader';
import Layout from '../templates/Layout';
import { Engineer } from '../assets/undraws';

const StyledJournalHome = styled('article')`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const JournalGrid = styled('section')`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Journal = React.memo(({ data }) => {
  const { posts, tags } = data;

  if (!data) return <p>Loading...</p>;

  return (
    <Layout>
      <StyledJournalHome>
        <PageHeader>
          <Engineer />
          <>
            <p>This is the place in which I collect my thoughts on tech - the projects I&apos;ve worked on, events I&apos;ve attended, and the cool things I&apos;ve learned along the way.</p>
            <h2>Journal</h2>
          </>
        </PageHeader>
        <JournalGrid>
          {posts.edges.map(({ node }) => (
            <Link to={node.fields.slug} key={node.fields.slug}>
              <HoverCard
                text={node.frontmatter.title}
                image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                onClick={(e) => e.stopPropagation()}
              />
            </Link>
          ))}
        </JournalGrid>
        <section>
          {tags.group.map(thisTag => (
            <Tag to={`/tags/${kebabCase(thisTag.fieldValue)}/`} key={thisTag.fieldValue}>
              {thisTag.fieldValue}
              <span>{thisTag.totalCount}</span>
            </Tag>
          ))}
        </section>
      </StyledJournalHome>
    </Layout>
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
            featuredImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                gatsbyImageData
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
  }
`;
