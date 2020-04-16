import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"

const Layout = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export const query = graphql`
  query
`

export default Layout
