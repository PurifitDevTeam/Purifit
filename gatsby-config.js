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
        spaceId:"wftu8epj2dca",
        accessToken:"4383cc30c12ae601a5b74e09dbfacaff1359cedf3e704a8d8cd08b01bfee998a"
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
