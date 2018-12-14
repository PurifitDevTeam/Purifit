module.exports = {
  siteMetadata: {
    title: 'Purifit',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve:'gatsby-source-contentful',
      options:{
        spaceId:"qzjcximermd8",
        accessToken:"445ce1b12cb5330f8a4489c661e231d1db809fb0b3a0cf050118305b69d14a01"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Purifit - Premium filters for taps and showers',
        short_name: 'Purifit',
        start_url: '/',
        background_color: '#2a3169',
        theme_color: '#2a3169',
        display: 'minimal-ui',
        icon: 'src/images/shower-icon.png', // This path is relative to the root of the site.
      },
    },
       'gatsby-plugin-offline',
       'gatsby-transformer-remark'
    
  ],
}
