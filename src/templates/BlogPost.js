import React from "react"
import { Link, graphql } from "gatsby"

import Layout from '../templates/Layout';
import Wrapped from '../components/Wrapped';
import BlogHeader from '../components/BlogHeader';

import '../pages/style.css'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <BlogHeader />
      <Wrapped>
        <article className="blog-post">
          <h2>{post.frontmatter.title}</h2>
          <h3>{post.frontmatter.date}</h3>
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <h3 className="back-to-blog"><Link to="/blog">&laquo; Back to Blog</Link></h3>
      </Wrapped>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      fields {
        slug
      }
    }
  }
`
