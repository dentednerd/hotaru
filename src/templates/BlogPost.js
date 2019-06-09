import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import WhiteBand from '../components/atoms/WhiteBand'
import Header from '../components/organisms/Header'
import BlogHeader from '../components/BlogHeader'

import '../pages/style.css'             

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div className="blog">
      <WhiteBand>
        <Header />
      </WhiteBand>
      <BlogHeader />
      <WhiteBand>
        <div className="blog-post">
          <h2>{post.frontmatter.title}</h2>
          <h3>{post.frontmatter.date}</h3>
          {post.frontmatter.featuredImage && <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />}
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <h4 className="back-to-blog">
          <Link to="/blog">&laquo; Back to Blog</Link>
        </h4>
      </WhiteBand>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
    }
  }
`
