// React components import
import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

//Context import
import CarritoProducto from "../components/CarritoProducto";
import CarritoContext from "../context/carrito/carritoContext";
import UsuarioContext from "../context/usuario/usuarioContext";

//import paypal button
import Paypal from "../components/PaypalCheckoutButton";


//My components
import Spinner from "../components/layout/Spinner";

const Carrito = () => {
  //---------------------Zona de state local----------------------------------------//
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [msj, setMsj] = useState(false);

  //---------------------Zona de leer el context-------------------------------------//
  const { usuario } = useContext(UsuarioContext);
  const {
    order,
    mensaje,
    productosCarrito,
    obtenerCarrito,
    loading,
  } = useContext(CarritoContext);

  //------------------------Zona de useEffect----------------------------------------//
  useEffect(() => {
    if (usuario) {
      obtenerCarrito(usuario.id);
    } else {
      obtenerCarrito();
    }
  }, [usuario]);

  useEffect(() => {
    if (mensaje) {
      setMsj(true);
    }
  }, [mensaje]);

  //-----------------Zona para llevar la orden a paypal-------------------------------//

  //sumamos los precios de los item
  let priceSum = order.reduce((total, ord) => total + ord.subtotal, 0);

  //definir order
  const ordered = {
    total: priceSum,
    items: order,
  };

  return (
    <Layout>
       <section className="store container">
        {msj ? <p className="">{mensaje}</p> : null}
        <h2 className="text-center text-uppercase">
          Carrito
        </h2>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            {productosCarrito.length === 0 ? (
              <>
              <div className='message'>
                  <p className=''>Tu carrito está vacío.</p>
                  <Link href="/index">
                    <a className="link-back text-center">Regresar al inicio</a>
                  </Link>
                </div>
              </>
            ) : (
              <div className='ctn-table'>
                <table className='table-car'>
                  <thead>
                    <tr>
                      <td></td>
                      <td>Imagen</td>
                      <td>Nombre</td>
                      <td>Unidad</td>
                      <td>Cantidad</td>
                      <td>Total P</td>
                    </tr>
                  </thead>
                  {productosCarrito.map((producto) => (
                    <CarritoProducto
                      setCount={setCount}
                      key={producto.idCar}
                      producto={producto}
                      setTotal={setTotal}
                      total={total}
                    />
                  ))}
                </table>
                <p className='text-center total'>Total a Pagar: <span>${priceSum.toFixed(2)}</span></p>
                <div className="my btn-paypal">
                      {count < 1 ? null : <Paypal order={ordered} />}
                  </div>
              </div>
            )}
          </div>
        )}
         </section>
    </Layout>
  );
};

export default Carrito;
