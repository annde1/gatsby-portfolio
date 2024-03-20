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
        name: `notes`,
        // Path to the directory
        path: `${__dirname}/src/notes/`,
      },
    },
  ],
  siteMetadata: {
    title: "Anat Ben Elazar Protfolio",
    description: "my portfolio",
  },
};
