import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query AllPosts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            date
            description
            thumbnail
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout>
      {/* <Link to="/about">Go to page 2</Link> */}
      <div className="content list">
        {posts.map(post => {
          return (
            <div className="list-item">
              <a
                className="list-post-title"
                href={`/posts?date=${post.frontmatter.date}/?title=${post.frontmatter.title}`}
              >
                {post.frontmatter.title}
              </a>
              <div className="list-post-date">
                <time>{post.frontmatter.date}</time>
              </div>
              <div className="list-post-description">
                <img src={post.frontmatter.thumbnail} alt="thumbnail" />
                <p>{post.frontmatter.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
