import React, {useState, useEffect} from "react";
import Head from "next/head";
import { makeStyles, Hidden} from '@material-ui/core';
import Header from "./Header";
import Drawer from './Drawer';
import {motion } from 'framer-motion';

const Layout = (props) => {

  const [year,setYear]=useState('');

  useEffect(()=>{
    const date=new Date();
    setYear(date.getFullYear());
  },[]);

  const useStyles=makeStyles(theme=>({
    root:{
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        minHeight:'100vh',
        backgroundColor: '#eeeeee',
        padding: theme.spacing(3)
    }
  }));

  const classes=useStyles();

  const [open,setOpen]=useState(false);

  const handleDrawerOpen=()=>{
      setOpen(!open);
  }


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
       
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link href="/static/css/app.css" rel="stylesheet" />
      </Head>
      <div className={classes.root}>
        <Header handleDrawerOpen={handleDrawerOpen}  />
        <motion.main className=''
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
        <Hidden xsDown>
                <Drawer
                variant='permanent'
                open={true}
                />
            </Hidden>
            <Hidden smUp>
                <Drawer
                variant='temporary'
                open={open}
                onClose={handleDrawerOpen}
                />
            </Hidden>
        <footer className=''>
          <div className="footer-copyright">
            <div className="">
                © { year } Copyright Text
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
