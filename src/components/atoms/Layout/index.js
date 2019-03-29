import React from "react"
import styled from '@emotion/styled'
import { StaticQuery, graphql } from "gatsby"

const StyledLayout = styled('div')`
  position: relative;
  margin: 0 auto;
  width: 96vw;
  max-width: 1024px;
  padding: 0 2vw;
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
      <StyledLayout>
        {children}
      </StyledLayout>
    )}
  />
)