import React from "react"
import Layout from "../components/layout"
import PropTypes from "prop-types"

const PostView = ({ post }) => {
  return (
    <Layout>
      <article class="content post">
        <h1 class="post-title">{post.title}</h1>
        <div class="post-date">
          <time>{post.date}</time>
        </div>
        {post.content}
        <div id="disqus_thread"></div>
      </article>
    </Layout>
  )
}

PostView.propTypes = {
  post: PropTypes.object,
  title: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
}

PostView.defaultProps = {
  post: {},
  title: "",
  date: "",
  content: "",
}
export default PostView
