import React from "react";
import Head from "next/head";
import { Global, css } from "@emotion/core";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --gris: #3d3d3d;
            --gris2: #6f6f6f;
            --gris3: #e1e1e1;
            --naranja: #da552f;
          }

          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
            margin:0;
            padding:0;
          }

          body {
            
            line-height: 1.5;
            font-family: "Inter", sans-serif;
          }

          h3 {
            font-family: "Inter", sans-serif;
            color:#3d3d3d;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          a {
            text-decoration: none;
            color:black !important;
          }

          li a{
            color:#f57c00 !important;
            font-weight:700;
          }

          img {
            max-height: 500px;
            max-width: 600px;
          }
        `}
      />
      <Head>
        <title>Distribuidora</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link href="/static/css/app.css" rel="stylesheet" />
      </Head>
      <Header />
      <main>{props.children}</main>
      <footer
      css={css `
        background-color:#3d3d3d;
        padding:2rem 0;
        color:white;
      `}
      >
      <div className="footer-copyright">
            <div className="container center">
                © 2014 Copyright Text
            </div>
          </div>
      </footer>
    </>
  );
};

export default Layout;
