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
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto Slab:700', 'Roboto Condensed']
        }
      }
    },
    `gatsby-transformer-remark`,
  ],
}
