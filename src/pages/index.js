import React from 'react'
import { graphql } from 'gatsby'
import RedBand from '../atoms/RedBand'
import WhiteBand from '../atoms/WhiteBand'
import Hero from '../organisms/Hero'
import Intro from '../organisms/Intro'
import Showreel from '../molecules/Showreel'
import Interests from '../organisms/Interests'
import Layout from '../templates/Layout'
import './global.css'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <Intro latestBlog={data.allMarkdownRemark.edges[0].node} />
      <RedBand>
        <Showreel />
      </RedBand>
      <WhiteBand>
        <Interests />
      </WhiteBand>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
}
`
