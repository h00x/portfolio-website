module.exports = {
  siteMetadata: {
    title: 'Unnatural',
    pages: {
      home: {
        name: 'Home',
        url: '/'
      },
      aboutDave: {
        name: 'About Dave',
        url: '/about-dave/'
      },
      portfolio: {
        name: 'Portfolio',
        url: '/portfolio/'
      },
      contact: {
        name: 'Contact',
        url: '/contact/'
      }
    },
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
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `188.166.115.189/backend/`,
        protocol: `http`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        // verboseOutput: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png",

        appName: "Unnatural", 
        appDescription: "Portfolio website of Dave Hoeks",
        developerName: "Dave Hoeks",
        developerURL: "http://www.unnatural.nl",
        dir: 'auto',
        lang: 'en-US',
        background: '#95eedd',
        theme_color: '#95eedd',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    // {
    // resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-37778923-1',
    //     // Puts tracking script in the head instead of the body
    //     head: true,
    //   }
    // },
    'gatsby-plugin-offline',
  ],
}
