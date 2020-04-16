import React from 'react'
import { graphql } from 'gatsby'

const Template = ({data}) => {
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