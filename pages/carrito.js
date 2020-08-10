import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import CarritoProducto from '../components/CarritoProducto';
import CarritoContext from '../context/carrito/carritoContext';
import UsuarioContext from '../context/usuario/usuarioContext';
import Link from 'next/link';
import Paypal from '../components/PaypalCheckoutButton';

const Carrito = () => {

    //---------------------Zona de state local----------------------------------------//
    const [count,setCount]=useState(0);
    const [msj, setMsj]=useState(false);

    //---------------------Zona de leer el context-------------------------------------//
    const { usuario  }=useContext(UsuarioContext);
    const {  order, mensaje,productosCarrito, obtenerCarrito }=useContext(CarritoContext);

    //------------------------Zona de useEffect----------------------------------------//
    useEffect(()=>{
        if (usuario) {
            obtenerCarrito(usuario.id);
        }
        else{
            obtenerCarrito();
        }

    },[usuario]);

    useEffect(()=>{
        if (mensaje) {
            setMsj(true);
        }
    },[mensaje])


    //-----------------Zona para llevar la orden a paypal-------------------------------//
      //sumamos los precios de los item
      let priceSum=order.reduce((total,ord)=> total+ ord.subtotal,0);

      //definir order
      const ordered={
          total: priceSum,
          items: order
      }


    return ( 
        <Layout>
             { msj ? <p className='fixed top-1/2 text-white bg-blue-500 p-5'>{mensaje}</p> : null}
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
                            setCount={setCount}
                            key={producto.productId}
                            producto={producto}
                            />
                        ))}
                        <div className='pt-5 pb-10 sm:mb-10 md:flex justify-end md:py-10'>
                        {count<1 ? null :
                         <Paypal
                         order={ordered}
                         />
                        }
                        </div>
                    </div>
                ) 
                }
            </section>
        </Layout>
     );
}
 
export default Carrito;