import React from "react"
import Layout from "../components/layout"
import { formatRelative, parseISO } from "date-fns"
import pt from "date-fns/locale/pt"

const PostView = ({ location }) => {
  const { state = {} } = location
  return (
    <Layout>
      <article className="content post">
        <h1 className="post-title">{state.frontmatter.title}</h1>
        <div className="post-date">
          <time>
            {formatRelative(parseISO(state.frontmatter.date), new Date(), {
              locale: pt,
            })}
          </time>
        </div>
        <div
          className="content post"
          dangerouslySetInnerHTML={{ __html: state.html }}
        ></div>
        <div id="disqus_thread"></div>
      </article>
    </Layout>
  )
}

export default PostView
