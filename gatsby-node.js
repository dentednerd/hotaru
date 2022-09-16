const path = require('path');
const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

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

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]}
        limit: 2000
      ) {
        edges {
          next {
            frontmatter {
              title
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
          previous {
            frontmatter {
              title
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
            excerpt(pruneLength: 125)
          }
        }
      }
      tagsRemark: allMarkdownRemark(limit: 2000) {
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

  posts.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('src/templates/PostPage/index.js'),
      context: {
        slug: node.fields.slug,
        next,
        previous,
      },
    });
  });

  const tags = result.data.tagsRemark.group;

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: path.resolve('src/templates/TagPage/index.js'),
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
