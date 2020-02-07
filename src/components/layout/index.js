import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import GlobalStyles from "../../styles/globalStyles"
import { Styles } from "./styles"
import { ThemeProvider } from "styled-components"
import theme from "./theme"

const Layout = ({ children }) => {
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

  const [title, pathUrl] = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header payload={(payload = { title, pathUrl })} />
      <Styles>
        <main>{children}</main>
        <footer>
          <a href="https://www.gatsbyjs.org">{data.site.siteMetadata.author}</a>
        </footer>
      </Styles>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
