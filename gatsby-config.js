module.exports = {
  flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    title: 'Joey Imlay',
    description: 'front end developer in Manchester, England',
    siteUrl: 'https://www.joeyimlay.dev',
  },
  plugins: [
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-offline',
    'gatsby-plugin-emotion',
    'gatsby-plugin-feed',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: true,
        analyzerPort: '8008',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https://www.joeyimlay.dev',
    //     sitemap: 'https://www.joeyimlay.dev/sitemap.xml',
    //     policy: [{ userAgent: '*', allow: '/' }],
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
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
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'joeyimlay.dev',
        short_name: 'joeyimlay.dev',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#333366',
        display: 'standalone',
        icon: 'src/assets/favicons/favicon-96x96.png',
        crossOrigin: 'use-credentials',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Zilla Slab:300,500,700',
          'Source Sans Pro:400,700',
          'Raleway',
          'Sacramento',
          'Ubuntu Mono',
        ],
        display: 'swap',
      },
    },
  ],
}
