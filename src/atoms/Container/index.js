import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';

const Container = styled('div')`
  position: relative;
  margin: 0 auto;
  width: 96vw;
  max-width: 1024px;
  padding: 1em 2vw;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
    padding: 0;
    margin: 0;
  }
`;

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        {children}
      </Container>
    )}
  />
);
