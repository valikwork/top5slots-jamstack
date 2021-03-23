/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const autoprefixer = require("autoprefixer");

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
          typeName: 'WPGraphQL',
          fieldName: 'wpgraphql',
          url: 'https://wacky-tent.flywheelsites.com/graphql',
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [autoprefixer()]
      }
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://wacky-tent.flywheelsites.com/graphql'
      }
    }
  ],
}
