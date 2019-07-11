const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-layouts-blog-post-layout-jsx": hot(preferDefault(require("/Users/kento/Programing/VScodeProjects/gatsby-wordpress-pwa/src/layouts/BlogPostLayout.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/kento/Programing/VScodeProjects/gatsby-wordpress-pwa/.cache/dev-404-page.js"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/Users/kento/Programing/VScodeProjects/gatsby-wordpress-pwa/src/pages/about.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/kento/Programing/VScodeProjects/gatsby-wordpress-pwa/src/pages/index.jsx")))
}

