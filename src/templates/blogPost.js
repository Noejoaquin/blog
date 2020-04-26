import React from 'react'
import { graphql, Link } from 'gatsby'

const Template = ({data, pageContext}) => {
  const { prev, next } = pageContext;
  const { markdownRemark } = data;
  const { title } = markdownRemark.frontmatter
  const { html } = markdownRemark
  return (
    <div>
      <h1>{title}</h1>
      <div
        className="blogPost"
        dangerouslySetInnerHTML={{__html: html}}
      />

      { next &&
        <Link to={next.node.frontmatter.path}>
          Next
        </Link>
      }

      { prev &&
        <Link to={prev.node.frontmatter.path}>
          Prev
        </Link>
      }
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
