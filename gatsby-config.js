/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `wrestlingDatabase`,
        collection: [`matches`, `wrestlers`],
        connectionString: `mongodb+srv://JCCDev:${process.env.MONGODB_CREDENTIAL}@cluster0.8125k.mongodb.net`,
        extraParams: {
          retryWrites: true,
        },
      },
    },
  ],
};
