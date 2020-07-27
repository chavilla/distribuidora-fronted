import React, { useContext } from "react";
import CarritoContext from "../context/carrito/carritoContext";

const CarritoProducto = ({ producto }) => {
  //Zona de leer el context
  const { productosCarrito } = useContext(CarritoContext);

  //Extraer las propiedades del producto
  const { name, price, stock, image } = producto;

  return (
    <div className="border my-2 bg-white md:grid md:grid-cols-12 md:py-3">
      <div className="py-4"></div>
      <div className="col-span-5 md:grid md:grid-cols-7 md:items-center">
        <img
          className="mx-auto md:col-span-2"
          src={`${process.env.backend}/api/products/getImage/${image}`}
          alt={`Imagen ${name}`}/>
          <h2 className="text-center py-3 text-2xl md:px-3 md:py-3 md:col-span-5">{name}</h2>
      </div>
      <div className="py-5 flex items-center justify-between md:flex-col col-span-2">
        <p className=" ml-5 text-xl md:m-0 md:text-center md:m-0 ">Precio</p>
        <span className="font-bold text-2xl text-right mr-5 md:m-0 md:text-center">
          ${price}
        </span>
      </div>
      <div className="py-5 flex items-center justify-between md:flex-col col-span-2">
        <label className="ml-5 text-xl md:m-0">Cantidad</label>
        <input
          type="number"
          className="w-12 mr-5 border-gray border text-center md:m-0"
        />
      </div>
      <div className="py-5 flex items-center justify-between md:flex-col col-span-2">
        <p className="ml-5 text-xl">Subtotal</p>
        <span className="font-bold text-2xl text-right mr-5 my-5 md:m-0">
          ${price}
        </span>
      </div>
    </div>
  );
};

export default CarritoProducto;
