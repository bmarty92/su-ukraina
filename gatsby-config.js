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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/src/content/events`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `addressees`,
        path: `${__dirname}/src/content/addressees`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `citizen-handbooks`,
        path: `${__dirname}/src/content/citizen-handbook`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `info-orgs`,
        path: `${__dirname}/src/content/info-orgs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `info-people`,
        path: `${__dirname}/src/content/info-people`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `page-contents`,
        path: `${__dirname}/src/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/src/content/uploads`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
  ],
};
