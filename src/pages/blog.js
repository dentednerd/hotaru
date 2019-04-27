import React from "react"
import { graphql } from "gatsby"

import WhiteBand from "../components/atoms/WhiteBand"
import Header from '../components/organisms/Header';
import BlogHeader from '../components/BlogHeader';
import IconLinks from '../components/molecules/IconLinks';
import Card from '../components/molecules/Card';
import { GridContainer, GridItem } from '../components/atoms/Grid';

import './style.css'

export default ({ data }) => {
  return (
    <div className="blog">
      <WhiteBand>
        <Header />
      </WhiteBand>
      <BlogHeader />
      <WhiteBand>
        <GridContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <GridItem key={node.id}>
            <Card article={node} />
          </GridItem>
        ))}
        </GridContainer>
      <IconLinks />
      </WhiteBand>
    </div>
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
