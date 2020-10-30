import React, { useContext, useEffect } from "react";
import Layout from "../components/layout/Layout";
import productoContext from "../context/productos/productoContext";
import usuarioContext from "../context/usuario/usuarioContext";
import Producto from "../components/Producto";
import Spinner from "../components/layout/Spinner";

const Tienda = () => {
  /* const {
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
  }, [errorAgregado]); */

  return (
    <Layout>

      <section className="about container">
        <h2 className="text-center">Tienda</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, quis
          voluptate quibusdam vitae odit aspernatur amet tempore veniam
          laboriosam, perspiciatis quaerat nostrum, sint unde rem est fuga?
          Magnam eum laborum quisquam corrupti nostrum dignissimos accusantium
          dicta aperiam nobis minima a excepturi asperiores repudiandae, nihil
          obcaecati placeat provident sint quasi sed rem pariatur laudantium
          fugiat natus cum? Libero, minus? Assumenda, alias?
        </p>
      </section>

     {/*    { loading 
          ?
            <Spinner/>
          :
          <div>
            {productos.map((producto) => (
              <Producto key={producto.id} producto={producto} />
            ))}
          </div> 
         } */}
    </Layout>
  );
};

export default Tienda;
