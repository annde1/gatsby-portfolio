/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Montserrat", // Replace with the name(s) of the Google Fonts you want to use
          "sans-serif",
          // Add more fonts as needed
        ],
        display: "swap", // Optional: Defines the font-display CSS property
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `notes`,
        // Path to the directory
        path: `${__dirname}/src/notes/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `data`,
        // Path to the directory
        path: `${__dirname}/src/data/`,
      },
    },
  ],
  siteMetadata: {
    title: "Anat Ben Elazar Protfolio",
    description: "my portfolio",
  },
};
