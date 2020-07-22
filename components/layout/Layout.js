import React from "react";
import Head from "next/head";
import { Global, css } from "@emotion/core";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Distribuidora</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
       <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link href="/static/css/app.css" rel="stylesheet" />
      </Head>
      <Header />
      <main className='bg-gray-200'>{props.children}
       <footer className='bg-gray-400 py-8 mt-8'>
        <div className="footer-copyright  mx-auto w-full">
          <div className="container mx-auto text-center">
              © 2014 Copyright Text
          </div>
        </div>
      </footer>
      </main>
    </>
  );
};

export default Layout;
