import { Link } from "gatsby"
import React from "react"
import { Styles } from "./styles"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ payload }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          pathUrl
          author
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <Styles>
      <div>
        <h1>
          <Link to="/">{title}</Link>
        </h1>
      </div>
    </Styles>
  )
}

export default Header
