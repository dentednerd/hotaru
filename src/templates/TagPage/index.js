import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from '../Layout';
import PageHeader from '../../molecules/PageHeader';
import CTALink from '../../atoms/CTALink';
import HoverCard from '../../atoms/HoverCard';
import Tag from '../../atoms/Tag';
import { Engineer } from '../../assets/undraws';

const JournalGrid = styled('section')`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TagPage = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges } = data.taggedPosts;
  const { tags } = data;

  return (
    <Layout>
      <PageHeader>
          <Engineer />
          <>
            <p>This is the place in which I collect my thoughts on tech - the projects I&apos;ve worked on, events I&apos;ve attended, and the cool things I&apos;ve learned along the way.</p>
            <h2>Journal</h2>
          </>
        </PageHeader>
      <h2>{`entries about ${tag}`}</h2>
      <JournalGrid>
        {edges.map(({ node }) => (
          <Link to={node.fields.slug}>
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
      <CTALink to="/journal">
        &laquo; back to journal
      </CTALink>
    </Layout>
  );
};

export default TagPage;

export const pageQuery = graphql`query ($tag: String) {
  taggedPosts: allMarkdownRemark(
    limit: 2000
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {tags: {in: [$tag]}}}
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
              gatsbyImageData
            }
          }
        }
      }
    }
  }
  tags: allMarkdownRemark {
    group(field: {frontmatter: {tags: SELECT}}) {
      fieldValue
      totalCount
    }
  }
}`;
