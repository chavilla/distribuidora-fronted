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
import theme from "../components/themeConfig";
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
     
        {msj ? <p className="">{mensaje}</p> : null}
        <p className="title text-center">
          Carrito
        </p>
        {loading ? (
          <Spinner />
        ) : (
          <section className="">
            {productosCarrito.length === 0 ? (
              <>
                <p variant="h5">Tu carrito está vacío.</p>
                <Link href="/tienda">
                  <a className="link-back">Volver a la tienda</a>
                </Link>
              </>
            ) : (
              <div>
                  {productosCarrito.map((producto) => (
                    <CarritoProducto
                      setCount={setCount}
                      key={producto.idCar}
                      producto={producto}
                      setTotal={setTotal}
                      total={total}
                    />
                  ))}
                <div className="my">
                    {count < 1 ? null : <Paypal order={ordered} />}
                </div>
              </div>
            )}
          </section>
        )}
    </Layout>
  );
};

export default Carrito;
