// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/andrewd/Personal/gatsby-tut/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/andrewd/Personal/gatsby-tut/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/andrewd/Personal/gatsby-tut/src/pages/contact.js")),
  "component---src-pages-index-old-js": preferDefault(require("/Users/andrewd/Personal/gatsby-tut/src/pages/index_old.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/andrewd/Personal/gatsby-tut/src/pages/index.js"))
}

