{
  plugins: [{
    resolve: `gatsby-source-datocms`,
    options: {
      apiToken: `9ca5e9fd42f54b968aa348656cfa88`,
      previewMode: true,
      disableLiveReload: false,
      apiUrl: 'https://iboga-index.admin.datocms.com/',
      localeFallbacks: {
        it: ['en'],
      },
    },
  }]
}

