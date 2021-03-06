module.exports = {
  siteMetadata: {
    title: 'Iboga Index',
    description: 'your place to find the best iboga provider'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `9ca5e9fd42f54b968aa348656cfa88`,
        previewMode: true,
        disableLiveReload: false,
        localeFallbacks: {
          it: ['en'],
        },
      },
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout/index.js')
        }
      }
    }
  ]
}

