import React, { useContext, useEffect } from "react";
import { useRouter } from 'next/router';
import Layout from "../../components/layout/Layout";
import productoContext from "../../context/productos/productoContext";
import usuarioContext from "../../context/usuario/usuarioContext";
import Producto from "../../components/Producto";
import Spinner from "../../components/layout/Spinner";

const Tienda = () => {

  const {
    errorAgregado,
    agregadoFalse,
    productos,
    obtenerProductosPorCategoria,
    loading
  } = useContext(productoContext);

  const { usuario } = useContext(usuarioContext);

  const router=useRouter();
  const { categoria }=router.query;

  useEffect(() => {
    if (categoria) {
      obtenerProductosPorCategoria(categoria); 
    }
  }, [categoria]);

  useEffect(() => {
    if (errorAgregado) {
      alert("Ya has agregado este producto antes");
      agregadoFalse();
    }
  }, [errorAgregado]); 


  return (
    <Layout>

      <section className="store container">
        <h2 className="text-center text-uppercase">{categoria}</h2>
        { loading 
          ?
            <Spinner/>
          :
          <div className='card-parent'>
            {productos.map((producto) => (
              <Producto key={producto.id} producto={producto} />
            ))}
          </div> 
         }
      </section>
    </Layout>
  );
};

export default Tienda;
