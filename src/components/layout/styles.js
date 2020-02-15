import styled from "styled-components"

export const Styles = styled.div`
  div.container {
    width: 100%;
    max-width: 75%;
    align-self: center;
  }
  div.container div.content {
    margin-top: 10%;
  }
  div.container div.content div.list-item {
    border-bottom: solid 1px #e4e4f4;
    margin-top: 10%;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  div.container div.content div.list-item a.list-post-title {
    color: #31343b;
    font-size: 30px;
  }
  div.container div.content div.list-item a.list-post-title:hover {
    color: #008aeb;
  }
  div.container div.content div.list-item div.list-post-description {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  div.container div.content div.list-item div.list-post-description img {
    max-width: 50%;
    max-height: 50%;
  }
  div.container div.content div.list-item div.list-post-description p {
    max-width: 70%;
    text-align: center;
  }
  @media screen and (max-width: 900px) {
    div.container div.content div.list-item div.list-post-description p {
      max-width: 100%;
    }
  }
  /*Page Contact*/
  div.contact {
    display: flex;
    widows: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  div.contact img {
    max-width: 200px;
    max-height: 200px;
    border-radius: 50%;
  }
  div.contact p {
    text-align: center;
    max-width: 70%;
  }
  @media screen and (max-width: 900px) {
    div.contact p {
      text-align: center;
      max-width: 100%;
    }
    div.contact img {
      max-width: 100px;
      max-height: 100px;
      border-radius: 50%;
    }
  }
  div.contact ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  div.contact ul li a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div.contact ul li {
    margin: 0;
    padding: 0;
  }
  div.contact ul li a div {
    max-width: 50%;
    max-height: 50%;
  }
`
