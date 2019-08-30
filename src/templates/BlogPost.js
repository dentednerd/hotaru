import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from './Layout';
import WhiteBand from '../atoms/WhiteBand';
import BlogHeader from '../molecules/BlogHeader';

const StyledBlogPost = styled('div')`
  p {
    margin-bottom: 1em;
  }

  code {
    font-size: 0.8em;
    background-color: #fcb;
  }

  pre {
    background-color: #fcb;
    margin: 1em;
    padding: 1em;
  }

  a {
    color: #c30;
  }

  header a {
    color: #333;
  }

  .post-content {
    margin: 2em 0;
  }

  h3 {
    color: #333;
    font-family: 'Roboto Slab', serif;
    font-size:1em;
    margin-bottom: 0.75em;
    font-weight:300;
    letter-spacing: -0.025em;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <BlogHeader />
      <WhiteBand>
        <StyledBlogPost>
          <h2>{post.frontmatter.title}</h2>
          <h3>{post.frontmatter.date}</h3>
          {post.frontmatter.featuredImage && <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />}
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </StyledBlogPost>
        <h4 className="back-to-blog">
          <Link to="/blog">&laquo; Back to Blog</Link>
        </h4>
      </WhiteBand>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        featuredImage {
          childImageSharp{
            sizes(maxWidth: 1920) {
              src
              aspectRatio
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
