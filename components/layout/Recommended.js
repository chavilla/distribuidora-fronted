import React, { useContext, useEffect } from "react";
import ProductoContext from "../../context/productos/productoContext";
import ProductosRecomendados from "../ProductosRecomendados";

const Recommended = () => {
  const { productos, obtenerProductos } = useContext(ProductoContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const { id, name, price, stock, category } = productos;

  return (
    <section className="container-card">
      <h2 className="text-center">Recomendados</h2>
      <p className="text-center card-title">Lo más vendido esta semana</p>
      <div className="card-parent">
        { productos.map(producto=>(
          <ProductosRecomendados
            key={producto.id}
            producto={producto}
          />
        ))}
       
      </div>
    </section>
  );
};

export default Recommended;
