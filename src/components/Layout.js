import React from "react"
import { StaticQuery, graphql } from "gatsby"

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
      <div className="wrapper">
        {children}
      </div>
    )}
  />
)