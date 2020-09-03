import React, {useState, useEffect} from "react";
import Head from "next/head";
import Header from "./Header";
import {motion, transform } from 'framer-motion';

const Layout = (props) => {

  const [year,setYear]=useState('');

  useEffect(()=>{
    const date=new Date();
    setYear(date.getFullYear());
  },[])

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
      <div className='body flex flex-wrap flex-col'>
        <Header />
        <motion.main className='bg-gray-200'
        initial="hidden" animate="visible"variants={{
          hidden: {
            scale: .99,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .05
            }
          },
        }}
        >{props.children}
        </motion.main>
        <footer className='bg-gray-400 py-8 w-full self-end'>
          <div className="footer-copyright  mx-auto w-full">
            <div className="container mx-auto text-center">
                © { year } Copyright Text
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
