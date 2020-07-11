import React from "react";
import ProductoState from "../context/productos/productoState";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ProductoState>
      <Component {...pageProps} />
    </ProductoState>
  );
};

export default MyApp;
