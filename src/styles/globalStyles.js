import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
}

html, body{
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  margin: 0;
  padding: 0;
  border: 0;
  font-family: 'Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif';
  font-size: 1rem;
  line-height: 1.6;
  color: #6f7380;
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  a{
  color: ${props => props.theme.colors.secundary};
}

button{
  padding: 1%;
  font-size: 20px;
  border: none;
  background: ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.text}
}

}


`
