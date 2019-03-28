import React from "react"
import { Link, graphql } from "gatsby"

import Layout from '../components/atoms/Layout';
import Header from '../components/organisms/Header';
import BlogHeader from '../components/BlogHeader';

import '../pages/style.css'
// import './BlogPost.css'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div className="blog">
      <Layout>
        <Header />
      </Layout>
      <BlogHeader />
      <Layout>
          <div className="blog-post">
            <h3>{post.frontmatter.title}</h3>
            <h4>{post.frontmatter.date}</h4>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <h4 className="back-to-blog"><Link to="/blog">&laquo; Back to Blog</Link></h4>
      </Layout>
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
      }
      fields {
        slug
      }
    }
  }
`