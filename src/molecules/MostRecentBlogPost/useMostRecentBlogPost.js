import { graphql, useStaticQuery } from 'gatsby';

export const useMostRecentBlogPost = () => {
  const { post } = useStaticQuery(
    graphql`
      {
        post: allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1) {
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
  return post;
};
