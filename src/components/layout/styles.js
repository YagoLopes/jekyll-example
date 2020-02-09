import styled from "styled-components"

export const Styles = styled.div`
  display: flex;
  justify-content: center;

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

  /*Syntax highlight */
  .highlight .hll {
    background-color: #ffffcc;
  }
  .highlight .c {
    color: #999988;
    font-style: italic;
  } /* Comment */
  .highlight .err {
    color: #a61717;
    background-color: #e3d2d2;
  } /* Error */
  .highlight .k {
    color: #000000;
    font-weight: bold;
  } /* Keyword */
  .highlight .o {
    color: #000000;
    font-weight: bold;
  } /* Operator */
  .highlight .cm {
    color: #999988;
    font-style: italic;
  } /* Comment.Multiline */
  .highlight .cp {
    color: #999999;
    font-weight: bold;
    font-style: italic;
  } /* Comment.Preproc */
  .highlight .c1 {
    color: #999988;
    font-style: italic;
  } /* Comment.Single */
  .highlight .cs {
    color: #999999;
    font-weight: bold;
    font-style: italic;
  } /* Comment.Special */
  .highlight .gd {
    color: #000000;
    background-color: #ffdddd;
  } /* Generic.Deleted */
  .highlight .ge {
    color: #000000;
    font-style: italic;
  } /* Generic.Emph */
  .highlight .gr {
    color: #aa0000;
  } /* Generic.Error */
  .highlight .gh {
    color: #999999;
  } /* Generic.Heading */
  .highlight .gi {
    color: #000000;
    background-color: #ddffdd;
  } /* Generic.Inserted */
  .highlight .go {
    color: #888888;
  } /* Generic.Output */
  .highlight .gp {
    color: #555555;
  } /* Generic.Prompt */
  .highlight .gs {
    font-weight: bold;
  } /* Generic.Strong */
  .highlight .gu {
    color: #aaaaaa;
  } /* Generic.Subheading */
  .highlight .gt {
    color: #aa0000;
  } /* Generic.Traceback */
  .highlight .kc {
    color: #000000;
    font-weight: bold;
  } /* Keyword.Constant */
  .highlight .kd {
    color: #000000;
    font-weight: bold;
  } /* Keyword.Declaration */
  .highlight .kn {
    color: #000000;
    font-weight: bold;
  } /* Keyword.Namespace */
  .highlight .kp {
    color: #000000;
    font-weight: bold;
  } /* Keyword.Pseudo */
  .highlight .kr {
    color: #000000;
    font-weight: bold;
  } /* Keyword.Reserved */
  .highlight .kt {
    color: #445588;
    font-weight: bold;
  } /* Keyword.Type */
  .highlight .m {
    color: #009999;
  } /* Literal.Number */
  .highlight .s {
    color: #d01040;
  } /* Literal.String */
  .highlight .na {
    color: #008080;
  } /* Name.Attribute */
  .highlight .nb {
    color: #0086b3;
  } /* Name.Builtin */
  .highlight .nc {
    color: #445588;
    font-weight: bold;
  } /* Name.Class */
  .highlight .no {
    color: #008080;
  } /* Name.Constant */
  .highlight .nd {
    color: #3c5d5d;
    font-weight: bold;
  } /* Name.Decorator */
  .highlight .ni {
    color: #800080;
  } /* Name.Entity */
  .highlight .ne {
    color: #990000;
    font-weight: bold;
  } /* Name.Exception */
  .highlight .nf {
    color: #990000;
    font-weight: bold;
  } /* Name.Function */
  .highlight .nl {
    color: #990000;
    font-weight: bold;
  } /* Name.Label */
  .highlight .nn {
    color: #555555;
  } /* Name.Namespace */
  .highlight .nt {
    color: #000080;
  } /* Name.Tag */
  .highlight .nv {
    color: #008080;
  } /* Name.Variable */
  .highlight .ow {
    color: #000000;
    font-weight: bold;
  } /* Operator.Word */
  .highlight .w {
    color: #bbbbbb;
  } /* Text.Whitespace */
  .highlight .mf {
    color: #009999;
  } /* Literal.Number.Float */
  .highlight .mh {
    color: #009999;
  } /* Literal.Number.Hex */
  .highlight .mi {
    color: #009999;
  } /* Literal.Number.Integer */
  .highlight .mo {
    color: #009999;
  } /* Literal.Number.Oct */
  .highlight .sb {
    color: #d01040;
  } /* Literal.String.Backtick */
  .highlight .sc {
    color: #d01040;
  } /* Literal.String.Char */
  .highlight .sd {
    color: #d01040;
  } /* Literal.String.Doc */
  .highlight .s2 {
    color: #d01040;
  } /* Literal.String.Double */
  .highlight .se {
    color: #d01040;
  } /* Literal.String.Escape */
  .highlight .sh {
    color: #d01040;
  } /* Literal.String.Heredoc */
  .highlight .si {
    color: #d01040;
  } /* Literal.String.Interpol */
  .highlight .sx {
    color: #d01040;
  } /* Literal.String.Other */
  .highlight .sr {
    color: #009926;
  } /* Literal.String.Regex */
  .highlight .s1 {
    color: #d01040;
  } /* Literal.String.Single */
  .highlight .ss {
    color: #990073;
  } /* Literal.String.Symbol */
  .highlight .bp {
    color: #999999;
  } /* Name.Builtin.Pseudo */
  .highlight .vc {
    color: #008080;
  } /* Name.Variable.Class */
  .highlight .vg {
    color: #008080;
  } /* Name.Variable.Global */
  .highlight .vi {
    color: #008080;
  } /* Name.Variable.Instance */
  .highlight .il {
    color: #009999;
  } /* Literal.Number.Integer.Long */
`
