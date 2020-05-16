import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import JournalHeader from '../../molecules/JournalHeader';
import JournalWrapper from '../../organisms/JournalWrapper';
import Card from '../../molecules/Card';
import JournalBackLink from '../../molecules/JournalBackLink';

const JournalPostWrapper = styled('main')`
  grid-column: 4 / 10;

  @media(max-width: 1023px) {
    grid-column: 2 / 12;
  }
`;

const TagPage = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges } = data.allMarkdownRemark;

  let tagTitle = tag.split('');
  tagTitle[0] = tagTitle[0].toUpperCase();
  tagTitle = tagTitle.join('');

  return (
    <Layout>
      <JournalHeader />
      <JournalWrapper>
        <JournalPostWrapper>
          <h2>{tagTitle}</h2>
          {edges.map(({ node }) => <Card article={node} key={node.id} />)}
          <JournalBackLink />
        </JournalPostWrapper>
      </JournalWrapper>
    </Layout>
  );
};

export default TagPage;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
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
  }
`;
