module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
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
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
       'gatsby-plugin-offline',
       'gatsby-transformer-remark'
    
  ],
}