import React from 'react'
import { graphql } from 'gatsby'
import WhiteBand from '../atoms/WhiteBand'
import BlogHeader from '../molecules/BlogHeader'
import Card from '../molecules/Card'
import { GridContainer, GridItem } from '../atoms/Grid'
import Layout from '../templates/Layout'

export default ({ data }) => {
  return (
    <Layout>
      <BlogHeader />
      <WhiteBand>
        <GridContainer>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <GridItem key={node.id}>
              <Card article={node} />
            </GridItem>
          ))}
        </GridContainer>
      </WhiteBand>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp{
                sizes(maxWidth: 630) {
                    ...GatsbyImageSharpSizes
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
