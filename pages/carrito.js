import React, { useContext, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import CarritoProducto from '../components/CarritoProducto';
import CarritoContext from '../context/carrito/carritoContext';
import Link from 'next/link';

const Carrito = () => {

    //Zona de leer el context
    const { productosCarrito, obtenerCarrito }=useContext(CarritoContext);

    useEffect(()=>{
        obtenerCarrito();
    },[])

    return ( 
        <Layout>
             <div className="container mx-auto py-8">
                <h3 className="text-center text-3xl md:text-5xl uppercase">Carrito</h3>
            </div>
            <section className='container w-11/12 mx-auto'>
                { productosCarrito.length===0 
                ?
                (
                    <div className='border-t-2 border-red-500'>
                        <p className='text-center text-2xl mt-5 mb-4'>Tu carrito está vacío.</p>
                        <Link href='/tienda'><a className='py-2 px-3 block text-center mx-auto my-10 w-10/12 sm:w-3/5 md:w-1/4 md:ml-0 bg-orange-600 text-white'>Volver a la tienda</a></Link>
                    </div>
                ) 
                :
                (
                    <div className='carrito '>
                        {productosCarrito.map(producto=>(
                            <CarritoProducto
                            key={producto.id}
                            producto={producto}
                            />
                        ))}
                        <div className='pt-5 pb-10 sm:mb-10 md:flex justify-end md:py-10'>
                        <button type='button' className='bg-orange-500 text-white w-full py-3 md:w-4/12'>Finalizar Compra</button>
                        </div>
                    </div>
                ) 
                }
            </section>
        </Layout>
     );
}
 
export default Carrito;