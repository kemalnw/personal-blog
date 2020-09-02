require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Kemal`,
    siteTitleAlt: `Kemal - Situs pribadi oleh Abdul Kemal`,
    author: `Kemal (abdulkemalnw@gmail.com)`,
    siteImage: `/android-chrome-512x512.png`,
    siteLanguage: `ID`,
    siteDescription: `Situs pribadi oleh Abdul Kemal Nasa'i Wibowo`,
    siteUrl: `https://kemalnw.id`,
    siteHeadline: `Situs pribadi oleh Abdul Kemal Nasa'i Wibowo`,
    siteLanguage: `id`,
    author: `@kemalnw`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        feedTitle: `Situs pribadi oleh Abdul Kemal Nasa'i Wibowo`,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/kemalnw`,
          },
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/in/kemalnw`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kemal - Personal site by Abdul Kemal`,
        short_name: `kemal`,
        description: `A personal site by Abdul Kemal`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
