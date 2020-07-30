import React, {useContext, useEffect} from 'react';
import Layout from '../components/layout/Layout';
import { css } from '@emotion/core';
import productoContext from '../context/productos/productoContext';
import usuarioContext from '../context/usuario/usuarioContext';
import Producto from '../components/Producto';

const Tienda = () => {
    const { productos, añadirProductoCarrito ,obtenerProductos}=useContext(productoContext);
    const { usuario }=useContext(usuarioContext);
    //obtenerProductos();
    useEffect(()=>{
        obtenerProductos();
    },[])

    return ( 
        <Layout>
            <div className="container mx-auto py-8">
                <h3 className="text-center text-3xl md:text-5xl uppercase">Tienda</h3>
            </div>

            <div className='container w-11/12 sm:w-8/12 md:w-11/12 lg:w-10/12 mx-auto'>
                <div className="grid sm:grid-cols-2 sm:gap-4  md:grid-cols-3 md:gap-8 lg:grid-cols-3 lg:gap-12">
                { productos.map(producto=>(
                    <Producto
                    key={producto.id}
                    producto={producto}
                    />
                )) }
                </div>
            </div>

        </Layout>
     );
}
 
export default Tienda;