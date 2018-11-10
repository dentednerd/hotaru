module.exports = {
  siteMetadata: {
    title: 'Joanne Imlay',
  },
  pathPrefix: '/CV',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
