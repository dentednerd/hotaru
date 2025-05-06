import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../templates/Layout'

import BrandsScreen from './BrandsScreen'
import IntroScreen from './IntroScreen'
import JournalScreen from './JournalScreen'
import MediaScreen from './MediaScreen'
import PortfolioScreen from './PortfolioScreen'

const HomePage = ({ data }) => {
  const { posts, images } = data

  if (!images) return null

  return (
    <Layout>
      <IntroScreen />
      <BrandsScreen />
      <PortfolioScreen images={images} />
      <MediaScreen />
      <JournalScreen posts={posts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    posts: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
    images: allImageSharp {
      edges {
        node {
          gatsbyImageData
        }
      }
    }
  }
`

export default HomePage
