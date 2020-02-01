import React from "react"
import { Link } from "gatsby"
import data from "../data"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

console.log(data)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="gatsby-poc/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
