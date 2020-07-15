import React from "react";
import ProductoState from "../context/productos/productoState";
import CarritoState from '../context/carrito/carritoState';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ProductoState>
      <CarritoState>
      <Component {...pageProps} />
      </CarritoState>
    </ProductoState>
  );
};

export default MyApp;
