import React, { useContext, useEffect } from "react";
import Layout from "../components/layout/Layout";
import productoContext from "../context/productos/productoContext";
import usuarioContext from "../context/usuario/usuarioContext";
import Producto from "../components/Producto";
import { Grid, Typography, ThemeProvider } from "@material-ui/core";
import theme from "../components/themeConfig";
import Spinner from "../components/layout/Spinner";

const Tienda = () => {
  const {
    errorAgregado,
    agregadoFalse,
    productos,
    obtenerProductos,
    loading
  } = useContext(productoContext);
  const { usuario } = useContext(usuarioContext);
  //obtenerProductos();
  useEffect(() => {
    obtenerProductos();
  }, []);

  useEffect(() => {
    if (errorAgregado) {
      alert("Ya has agregado este producto antes");
      agregadoFalse();
    }
  }, [errorAgregado]);

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <div className="">
          <Typography className="title" color="primary" variant="h3">
            Tienda
          </Typography>
        </div>

        { loading 
          ?
            <Spinner/>
          :
          <Grid container spacing={10}>
            {productos.map((producto) => (
              <Producto key={producto.id} producto={producto} />
            ))}
          </Grid> 
         }
      </ThemeProvider>
    </Layout>
  );
};

export default Tienda;
