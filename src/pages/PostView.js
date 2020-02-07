import React from "react"
import Layout from "../components/layout"

const PostView = () => {
  const post = {
    title: "Git Github",
    date: "20-10-1996",
    content:
      "ve created a monster, ‘cause nobody wants to. See Marshall no more, they want Shady, Im chopped liver. Well, if you want Shady, this is what Ill give ya. A little bit of weed mixed with some hard liquor. Some vodka thatll jump start my heart quicker. Than a shock when I get shocked at the hospital.",
  }

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
export default PostView
