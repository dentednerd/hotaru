import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import Layout from '../Layout';
import Footer from '../../Footer';
import '../../pages/global.css';

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
  padding: 1rem 1rem 0.5rem 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    width: calc(100vw - 2rem);
    margin: 0;
  }

  p {
    margin-bottom: 1em;
    letter-spacing: -0.025em;
    width: 100vw;
  }

  a {
    color: #ff7dab;
  }

  .post-content {
    margin: 0;
  }

  h3 {
    font-weight: 600;
    font-size: 1rem;
  }
`;

const Back = styled('span')`
  display: block;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0;
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
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Back>
          <Link to="/journal">
            <FontAwesomeIcon
              icon={faAngleDoubleLeft}
              style={{ marginRight: '0.5rem' }}
            />
          </Link>
        </Back>
        <Footer />
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
