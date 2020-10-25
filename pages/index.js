import React, {useContext, useState, useEffect} from 'react';
import Layout from '../components/layout/Layout';
import Categories from '../components/layout/Categories';
import UsuarioContext from "../context/usuario/usuarioContext";
import Hero from '../components/layout/Hero';
import Recommended from '../components/layout/Recommended';
import About from '../components/layout/About';

const Home = () => {

  return ( 
    <Layout>
      <Hero/>
      <Categories/>
      <Recommended/>
      <About/>
    </Layout>
   );
}
 
export default Home;
