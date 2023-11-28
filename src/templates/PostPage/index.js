import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../Layout';
import Hero from './Hero';
import JournalPost from './JournalPost';
import SEO from '../../atoms/SEO';
import HoverCard from '../../atoms/HoverCard';
import FindMe from '../../molecules/FindMe';

const NextPrevious = styled('nav')`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: auto;
  gap: 1rem;
  margin: 1rem 0;

  @media(min-width: 768px) {
    grid-template-rows: auto;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PostPage = ({ data, pageContext }) => {
  const { post } = data;
  const thisFeaturedImage = getImage(post.frontmatter.featuredImage);
  const { next, previous } = pageContext;
  const nextImage = next && getImage(next.frontmatter.featuredImage.childImageSharp.gatsbyImageData);
  const previousImage = previous && getImage(previous.frontmatter.featuredImage.childImageSharp.gatsbyImageData);

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        featuredImage={thisFeaturedImage.images.fallback.src}
        keywords={post.frontmatter.tags}
      />
      <Hero image={thisFeaturedImage.images.fallback.src} title={post.frontmatter.title} />
      <JournalPost post={post} />
      <FindMe>
        <NextPrevious>
          {pageContext.previous && (
            <Link to={previous.fields.slug}>
              <HoverCard
                text={`« ${previous.frontmatter.title}`}
                image={previousImage}
                onClick={(e) => e.stopPropagation()}
              />
            </Link>
          )}
          {pageContext.next && (
            <Link to={next.fields.slug}>
              <HoverCard
                text={`${next.frontmatter.title} »`}
                image={nextImage}
                onClick={(e) => e.stopPropagation()}
              />
            </Link>
          )}
        </NextPrevious>
      </FindMe>
    </Layout>
  );
};

export default PostPage;

export const query = graphql`query ($slug: String!) {
  post: markdownRemark(fields: {slug: {eq: $slug}}) {
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
  tags: allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 2000) {
    group(field: {frontmatter: {tags: SELECT}}) {
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
  categories: allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 2000) {
    group(field: {frontmatter: {category: SELECT}}) {
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
}`;
