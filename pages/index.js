import React, {useContext, useState, useEffect} from 'react';
import Layout from '../components/layout/Layout';
import UsuarioContext from "../context/usuario/usuarioContext";
import Link from 'next/link';

const Home = () => {

  return ( 
    <Layout>
      <div className="container">
        <h3>Desde Index</h3>
      </div>
    </Layout>
   );
}
 
export default Home;
