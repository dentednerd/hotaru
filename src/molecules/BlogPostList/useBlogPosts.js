import { graphql, useStaticQuery } from 'gatsby';

export const useBlogPosts = () => {
  const { posts } = useStaticQuery(
    graphql`
      {
        posts: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
          edges {
            node {
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
  );
  return posts;
};
