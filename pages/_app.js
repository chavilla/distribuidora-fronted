import React from "react";
import ProductoState from "../context/productos/productoState";
import CarritoState from "../context/carrito/carritoState";
import UsuarioState from "../context/usuario/usuarioState";
import tokenAuth from '../config/token';

const MyApp = ({ Component, pageProps }) => {

  return (
    <UsuarioState>
      <ProductoState>
        <CarritoState>
          <Component {...pageProps} />
        </CarritoState>
      </ProductoState>
    </UsuarioState>
  );
};

export default MyApp;
