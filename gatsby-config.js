module.exports = {
  siteMetadata: {
    title: `Huddle landing page`,
    description: `Huddle landing page built in gatsby`,
    author: `@sMit3r911`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:400,700`,
          `Open Sans\:400` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
  ]
}
