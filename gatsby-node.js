const path = require('path');
const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/BlogPost/index.js');

  const result = await graphql(`{
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp{
                sizes(maxWidth: 630) {
                  src
                }
              }
            }
            tags
          }
          fields {
            slug
          }
          excerpt(pruneLength: 125)
        }
      }
    }
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        }
      }
    }
  `);

  // handle errors
  // if (result.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL query.`);
  //   return;
  // }

  const posts = result.data.postsRemark.edges;

  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};
