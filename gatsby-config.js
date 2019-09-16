module.exports = {
  siteMetadata: {
    title: 'Joanne Imlay',
  },
  pathPrefix: '/CV',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Josefin Sans', 'Josefin Slab', 'Sacramento', 'Ubuntu Mono'],
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1920,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-copy-linked-files'],
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {},
    },
  ],
};
