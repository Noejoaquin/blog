const path = require('path');

// 'graphql' will find the files, and 'actions' is where createPage lives
exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blogPost.js')
  // this allows graphql to query for all our pages
    return graphql(
      `
        query {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      `
    ).then(res => {
      // this creates the actual pages from the data that was received
        res.data.allMarkdownRemark.edges.forEach(({node}) => {
          const path = node.frontmatter.path;
          return createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
            },
          })
        })
      })
}
