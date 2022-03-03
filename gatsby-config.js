module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `orgs-for-donating`,
        path: `${__dirname}/src/content/organizacijos-aukojimui`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `orgs-for-volunteering`,
        path: `${__dirname}/src/content/organizacijos-savanorystei`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `initiatives`,
        path: `${__dirname}/src/content/initiatives`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-preact`,
  ],
};
