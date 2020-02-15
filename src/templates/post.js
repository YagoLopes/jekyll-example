import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
  const post = data.markdownRemark
  const htmlContent = { __html: post.html }

  return (
    <Layout>
      <div className="container">
        <article class="content post">
          <h1 class="post-title">{post.frontmatter.title}</h1>
          <div class="post-date">
            <time>{post.frontmatter.date}</time>
          </div>
          <div dangerouslySetInnerHTML={htmlContent} />
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
