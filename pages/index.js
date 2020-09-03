import React, {useContext, useState, useEffect} from 'react';
import Layout from '../components/layout/Layout';
import UsuarioContext from "../context/usuario/usuarioContext";
import Link from 'next/link';
import {motion } from 'framer-motion';

const Home = () => {

  return ( 
    <Layout>
      <div>
      <div className="container">
        <h3 >Desde Index</h3>
      </div>
      </div>
    </Layout>
   );
}
 
export default Home;
