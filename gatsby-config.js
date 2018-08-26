module.exports = {
  siteMetadata: {
    title: 'Unnatural',
    pages: [
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'About me',
        url: '/about-me/'
      },
      {
        name: 'Portfolio',
        url: '/portfolio/'
      },
      {
        name: 'Contact',
        url: '/contact/'
      }
    ],
    colors: {
      darkGrey: '#393F43',
      creme: '#F9F9EA',
      lightGreen: '#95EEDD',
      darkGreen: '#AAD9CC',
      pink: '#FFC4C4'
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
