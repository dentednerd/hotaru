import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Header from '../components/Header';
import BlogHeader from '../components/BlogHeader';
import IconLinks from '../components/IconLinks';

import './style.css'

export default ({ data }) => {
  return (
    <div className="blog">
      <Layout>
        <Header />
      </Layout>
      <BlogHeader />
      <Layout>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="blog-post">
            <h3>
              <Link to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
            </h3>
            <h4>{node.frontmatter.date}</h4>
            <p>{node.excerpt}</p>
          </div>
        ))}
      <IconLinks />
      </Layout>
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