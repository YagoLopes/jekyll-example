import React from "react"
import { graphql } from "gatsby"
export default ({ data }) => {
  const post = data.markdownRemark
  const htmlContent = { __html: post.html }
  return (
    <div>
      <div>{post.frontmatter.title}</div>
      <div dangerouslySetInnerHTML={htmlContent} />
    </div>
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
