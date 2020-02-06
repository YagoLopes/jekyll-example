import styled from "styled-components"

export const Styles = styled.header`
  background: ${props => props.theme.colors.primary};
  margin-bottom: 1.45rem;

  div {
    margin: 0 auto;
    max-width: 960;
    padding: 1.45rem 1.0875rem;

    h1 {
      margin: 0;
    }

    a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`
