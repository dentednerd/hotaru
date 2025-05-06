import styled from '@emotion/styled'
import { Link, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import SEO from '../../atoms/SEO'
import JournalCard from '../../molecules/JournalCard'
import { breakpoints, colors, fonts } from '../../tokens'
import Layout from '../Layout'
import Hero from './Hero'

const ContentWrapper = styled.div`
  width: calc(100vw - 2rem);
  max-width: calc(${breakpoints.sm}px - 2rem);
  margin: 1rem;

  @media (min-width: ${breakpoints.md}px) {
    width: ${breakpoints.sm}px;
    margin: 1rem auto;
  }
`

const PostFooter = styled.nav`
  background-color: ${(props) => props.theme.bg2};
  margin: 0 auto;
  padding: 1rem 0;

  div {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 2rem;
    place-items: center;

    a {
      max-width: 30vw;
    }
  }
`

const PostContent = styled.div`
  padding: 0;

  p:first-of-type:first-letter {
    font-family: ${fonts.headline};
    initial-letter: 2;
    margin-right: 0.5rem;
  }

  blockquote p:first-of-type:first-letter,
  li p:first-of-type:first-letter {
    font-family: inherit;
    initial-letter: 1;
    margin-right: 0.1rem;
  }

  ul {
    list-style: none;
    max-width: 100%;
    margin: 0;
    padding: 0;

    li:before {
      content: '» ';
    }
  }
`

const Byline = styled('p')`
  font-family: ${fonts.cursive};
  font-size: 2rem;
  margin: 2rem 0 1rem;
  color: ${colors.text};
`

const PostPage = ({ data, pageContext }) => {
  const { post } = data
  const thisFeaturedImage = getImage(post.frontmatter.featuredImage)
  const { next, previous } = pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        featuredImage={thisFeaturedImage.images.fallback.src}
        keywords={post.frontmatter.tags}
      />
      <Hero
        image={thisFeaturedImage.images.fallback.src}
        title={post.frontmatter.title}
      />

      <ContentWrapper>
        <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        <Byline>thanks for reading! Joey x</Byline>
      </ContentWrapper>

      <PostFooter>
        <ContentWrapper>
          {pageContext.previous && <JournalCard post={previous} />}
          <Link to="/">Home</Link>
          {pageContext.next && <JournalCard post={next} />}
        </ContentWrapper>
      </PostFooter>
    </Layout>
  )
}

export default PostPage

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
`
