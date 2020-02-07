import React from "react"
import PropTypes from "prop-types"
import Header from "../header"
import GlobalStyles from "../../styles/globalStyles"
import { Styles } from "./styles"
import { ThemeProvider } from "styled-components"
import theme from "./theme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Styles>
        <main className="container">{children}</main>
      </Styles>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
