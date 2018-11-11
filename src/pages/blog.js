import React from "react"
import { Link, graphql } from "gatsby"

import Layout from '../templates/Layout';
import Wrapped from "../components/Wrapped"
import BlogHeader from '../components/BlogHeader';

import './style.css'

export default ({ data }) => {
  return (
    <Layout>
      <BlogHeader />
      <Wrapped>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id} className="blog-post">
            <h2>
              <Link to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <h3>{node.frontmatter.date}</h3>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </Wrapped>
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
