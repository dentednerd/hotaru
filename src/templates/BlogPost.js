import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import Layout from './Layout';
import '../pages/global.css';

const FeaturedImage = styled(Img)`
  width: 50vw;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const BlogPost = styled('div')`
  width: calc(50vw - 2rem);
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    width: calc(100vw - 2rem);
    margin: 0;
  }

  p {
    margin-bottom: 1em;
    letter-spacing: -0.025em;
  }

  a {
    color: #ff7dab;
  }

  .post-content {
    margin: 1em 0;
  }

  h2 {
    margin-bottom: 0;
  }

  h3 {
    font-family: 'Josefin Slab', serif;
    font-weight: 600;
    font-size:1em;
    margin-top: 0;
    margin-bottom: 0;
    letter-spacing: -0.025em;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      {post.frontmatter.featuredImage && (
        <FeaturedImage
          sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
        />
      )}
      <BlogPost className="lemon">
        <h2>{post.frontmatter.title}</h2>
        <h3>{post.frontmatter.date}</h3>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link to="/blog">
          <FontAwesomeIcon
            icon={faAngleDoubleLeft}
            style={{ marginRight: '1rem' }}
          />
          Back to Blog
        </Link>
      </BlogPost>
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
