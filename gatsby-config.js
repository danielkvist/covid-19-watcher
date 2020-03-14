const siteMetadata = {
  title: "COVID-19 Watcher",
  description:
    "A simple webapp to see the activity of the coronavirus in any country of the world.",
  author: "Danielkvist",
  keywords: ["covid-19", "coronavirus", "covid19"],
  siteUrl: "https://covidwatcher.netlify.com",
}

const plugins = [
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sass",
  {
    resolve: "gatsby-plugin-purgecss",
    options: {
      printRejected: true,
      // develop: true,
    },
  },
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "COVID-19 Watcher",
      short_name: "COVID-19 Watcher",
      start_url: "/",
      background_color: "#fefcfb",
      theme_color: "#04a777",
      display: "standalone",
    },
  },
  "gatsby-plugin-offline",
]

module.exports = {
  siteMetadata,
  plugins,
}
