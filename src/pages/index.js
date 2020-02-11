import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { formatDistanceToNow, parseISO } from "date-fns"
import pt from "date-fns/locale/pt"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            date
            description
            thumbnail
          }
          html
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className="content list">
        {posts.map(post => {
          return (
            <div key={post.id} className="list-item">
              <Link className="list-post-title" to="/post" state={post}>
                {post.frontmatter.title}
              </Link>
              <div className="list-post-date">
                <time>
                  {`${formatDistanceToNow(parseISO(post.frontmatter.date), {
                    locale: pt,
                  })} atrás`}
                </time>
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
