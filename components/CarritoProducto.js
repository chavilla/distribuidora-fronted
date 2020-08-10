import React, { useContext, useState, useEffect } from "react";
import CarritoContext from "../context/carrito/carritoContext";

const CarritoProducto = ({ producto }) => {
 
  //Zona de leer el context
  const { updateOrder }=useContext(CarritoContext);

  //Extraer las propiedades del producto
  const { productId,name, price, stock, image } = producto;

  // local para el subtotal
  const [cantidad, setCantidad]=useState(1);
  const [subtotal,setSubtotal]=useState('');
  const [error, setError]=useState(false);

  useEffect(()=>{
    if(cantidad && price){
      setSubtotal(cantidad*price);
    }

    if (cantidad<1) {
      setError(true);
    }else{
      setError(false);
      updateOrder(productId,name,cantidad,cantidad*price);
    }

  },[cantidad,producto]);




  return (
    <>
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
          min="1"
          className="w-12 mr-5 border-gray border text-center md:m-0"
          value={cantidad}
          onChange={e=>setCantidad(Number(e.target.value))}
        />
      </div>
      <div className="py-5 flex items-center justify-between md:flex-col col-span-2">
        <p className="ml-5 text-xl">Subtotal</p>
        <span className="font-bold text-2xl text-right mr-5 my-5 md:m-0">
         ${subtotal}
        </span>
      </div>
    </div>
    {error ? <p className='bg-red-500 py-4 px-3 text-white text-center md:w-6/12 mx-auto'>La cantidad debe ser igual o mayor a 1</p> :null}
    </>
  );
};

export default CarritoProducto;
