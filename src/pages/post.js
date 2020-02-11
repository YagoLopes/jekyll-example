import React from "react"
import Layout from "../components/layout"
import { formatRelative, parseISO } from "date-fns"
import pt from "date-fns/locale/pt"

const PostView = ({ location }) => {
  const {title,date} = location.state.frontmatter !== undefined ? location.state.frontmatter : {}
  const {html} = location.state
  return (
    <Layout>
      <article className="content post">
        <h1 className="post-title">{title}</h1>
        <div className="post-date">
          <time>
            {formatRelative(parseISO(date), new Date(), {
              locale: pt,
            })}
          </time>
        </div>
        <div
          className="content post"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <div id="disqus_thread"></div>
      </article>
    </Layout>
  )
}

export default PostView
