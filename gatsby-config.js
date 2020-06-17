/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path:`.env.${process.env.NODE_ENV}`
})
module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'Gatsby Tutorial',
    description: 'Learning Gatsby',
    author: '@karthik',
    data:['voltage', 'current'],
    person:{name:"Sannika", age: 8},
  },

  
  plugins: [`gatsby-plugin-styled-components`,
  `gatsby-transformer-sharp`, 
  `gatsby-plugin-sharp`,
  `react-hot-loader`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
      name: `media`,
      path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `8pl6lqzzdi3t`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
      name: `posts`,
      path: `${__dirname}/src/posts/`,
      },
    },
],
}
