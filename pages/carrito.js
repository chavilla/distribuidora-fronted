import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import CarritoProducto from '../components/CarritoProducto';
import CarritoContext from '../context/carrito/carritoContext';
import UsuarioContext from '../context/usuario/usuarioContext';
import Link from 'next/link';
import Paypal from '../components/PaypalCheckoutButton';
import { ThemeProvider, Typography } from '@material-ui/core';
import theme from '../components/themeConfig';
import Spinner from '../components/layout/Spinner';

const Carrito = () => {

    //---------------------Zona de state local----------------------------------------//
    const [count,setCount]=useState(0);
    const [msj, setMsj]=useState(false);

    //---------------------Zona de leer el context-------------------------------------//
    const { usuario  }=useContext(UsuarioContext);
    const {  order, mensaje,productosCarrito, obtenerCarrito, loading }=useContext(CarritoContext);

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
            <ThemeProvider theme={theme}>
             { msj ? <Typography className=''>{mensaje}</Typography> : null}
             <Typography variant='h3' className='title' color='primary'>
                Carrito
            </Typography>
            {
                loading 
                ?
                <Spinner/>
                :
                <section className=''>
                    { productosCarrito.length===0 
                    ?
                    (   <>
                            <Typography variant='h5'>Tu carrito está vacío.</Typography>
                            <Link href='/tienda'><a className='link-back'>Volver a la tienda</a></Link>
                        </>
                    ) 
                    :
                    (
                        <div className=''>
                            {productosCarrito.map(producto=>(
                                <CarritoProducto
                                setCount={setCount}
                                key={producto.productId}
                                producto={producto}
                                />
                            ))}
                            <div className=''>
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
            }
            </ThemeProvider>
        </Layout>
     );
}
 
export default Carrito;