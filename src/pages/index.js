import React from "react"
import { Link } from "gatsby"
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
  const post = data.allMarkdownRemark.nodes[0].frontmatter
  return (
    <Layout>
      {/* <Link to="/about">Go to page 2</Link> */}
      <div className="content list">
        <div className="list-item">
          <a
            className="list-post-title"
            href="/posts/2020/01/29/instalando-git"
          >
            Instalando o Git
          </a>
          <div className="list-post-date">
            <time>29 Jan 2020</time>
          </div>

          <div className="list-post-description">
            <img
              hei=""
              src="https://img.icons8.com/color/48/000000/git.png"
              alt="thumbnail"
            />
            <p>
              Durante o desenvolvimento de software o que fazemos é escrever
              arquivos, e a cada modificação adição ou remoção geramos uma nova
              versão do arquivo. Com a ajuda do Git você ganha o super poder de
              controlar o tempo de produção do seu arquivo. Tornando possível
              voltar em versões anteriores, remover partes de uma verão e
              trabalhar em versões simultâneas.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
