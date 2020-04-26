const path = require('path');

// 'graphql' will find the files, and 'actions' is where createPage lives
exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blogPost.js')
  // this allows graphql to query for all our pages
    return graphql(
      `
        query {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date]}
          ) {
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
      const posts = res.data.allMarkdownRemark.edges;

        posts.forEach(({node}, index) => {
          const path = node.frontmatter.path;
          return createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : posts[index - 1],
              next: index === posts.length - 1 ? null : posts[index + 1],
            },
          })
        })
      })
}
