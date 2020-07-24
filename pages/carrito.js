import React, { useContext } from 'react';
import Layout from '../components/layout/Layout';
import CarritoContext from '../context/carrito/carritoContext';
import Link from 'next/link';

const Carrito = () => {

    //Zona de leer el context
    const { productos }=useContext(CarritoContext);

    console.log(productos);

    return ( 
        <Layout>
             <div className="container mx-auto py-8">
                <h3 className="text-center text-3xl md:text-5xl uppercase">Carrito</h3>
            </div>
            <section className='container mx-auto'>
                { productos.length===0 
                ?
                (
                    <div className='border-t-2 border-red-500'>
                        <p className='text-center text-2xl mt-5 mb-4'>Tu carrito está vacío.</p>
                        <Link href='/tienda'><a className='py-2 px-3 block text-center mx-auto my-10 w-10/12 sm:w-3/5 md:w-1/4 md:ml-0 bg-orange-600 text-white'>Volver a la tienda</a></Link>
                    </div>
                ) 
                :
                (
                    <div className='carrito'></div>
                ) 
                }
            </section>
        </Layout>
     );
}
 
export default Carrito;