import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';
import dayjs from 'dayjs';

import BlogPostList from '../../molecules/BlogPostList';
import CTALink from '../../atoms/CTALink';
import Layout from '../Layout';
import SEO from '../../atoms/SEO';

import "./PostPage.scss";

dayjs.extend(advancedFormat);

const PostPage = ({ data }) => {
  const { post } = data;
  const thisFeaturedImage = getImage(post.frontmatter.featuredImage);

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        featuredImage={thisFeaturedImage.images.fallback.src}
        keywords={post.frontmatter.tags}
      />

      <section className="blog-post">
        <header>
          <GatsbyImage
            image={thisFeaturedImage}
            alt={post.title}
            loading="eager"
          />
        </header>

        <div className="blog-post-content">
          <h1 className="blog-post-title">{post.frontmatter.title}</h1>
          <p>
            by <Link to="/">Joey Imlay</Link>
            <br />
            {dayjs(post.frontmatter.date).format('dddd Do MMMM YYYY')}
          </p>
          <article dangerouslySetInnerHTML={{ __html: post.html }} />
          <p className="byline">thanks for reading! Joey x</p>
          <CTALink to="/">back to homepage</CTALink>
        </div>

        <aside>
          <BlogPostList />
        </aside>
      </section>
    </Layout>
  );
};

export default PostPage;

export const query = graphql`
  query ($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      fields {
        slug
      }
    }
    tags: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 2000
    ) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
        nodes {
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
    categories: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 2000
    ) {
      group(field: { frontmatter: { category: SELECT } }) {
        fieldValue
        totalCount
        nodes {
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
  }
`;
