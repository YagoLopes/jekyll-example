import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Styles } from "./styles"

const Header = ({ payload }) => (
  <Styles>
    <div>
      <h1>
        <Link to={payload.pathUrl}>{payload.siteTitle}</Link>
      </h1>
    </div>
  </Styles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
