import { Link } from "gatsby"
import React from "react"
import { Styles } from "./styles"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          pathUrl
        }
      }
    }
  `)

  const { title, pathUrl } = data.site.siteMetadata

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
