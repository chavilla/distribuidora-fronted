import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "./Header";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import Footer from "./Footer";

const Layout = (props) => {
  const [year, setYear] = useState("");

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Template</title>
        <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/static/css/normalize.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/static/css/styles.css" />
      </Head>
      <Header />
      <motion.main
        className="main"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.99,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.05,
            },
          },
        }}
      >
        {props.children}
      </motion.main>
      <Wrapper/>
      <Footer/>
    </>
  );
};

export default Layout;
