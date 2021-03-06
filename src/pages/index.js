import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"

const Layout = ({data}) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Header />
      {edges.map(edge => {
        const { frontmatter } = edge.node;
        return (
          <div key={frontmatter.path}>
            <Link to={frontmatter.path}>
              { frontmatter.title }
            </Link>
          </div>
        )
      })}
    </div>
  )
}

// this query pulls all the nodes that we have and will pass it into
// component as props!
export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      sort: {order: ASC, fields: [frontmatter___date]}
    ){
      edges {
        node {
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`

export default Layout
