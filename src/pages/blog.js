import React from "react"
import { Link, graphql } from "gatsby"

import WhiteBand from "../components/atoms/WhiteBand"
import Header from '../components/organisms/Header';
import BlogHeader from '../components/BlogHeader';
import IconLinks from '../components/molecules/IconLinks';

import './style.css'

export default ({ data }) => {
  return (
    <div className="blog">
      <WhiteBand>
        <Header />
      </WhiteBand>
      <BlogHeader />
      <WhiteBand>
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
