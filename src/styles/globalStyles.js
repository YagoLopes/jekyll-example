import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
*{
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,500&display=swap');
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-family:'Roboto', sans-serif;
  font-size: 14px;
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
