import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
export default ({ data }) => (
  <Layout title="Welcome to my blog">
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          <h2>{node.frontmatter.date}</h2>
          <h3>{node.excerpt}</h3>
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
