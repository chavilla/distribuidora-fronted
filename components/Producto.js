import React, { useContext, useEffect } from "react";
import Productocontext from "../context/productos/productoContext";
import Usuariocontext from "../context/usuario/usuarioContext";
import Link from "next/link";

const Producto = ({ producto }) => {

  //----------------zona para extraer context----------------------------//
  const { errorAgregado,agregarProductoCarrito } = useContext(
    Productocontext
  );

  const { usuario }=useContext(Usuariocontext);

  //----------------Zona de ejecucion de funciones-----------------------//
  const añadirProducto = (productoId) => {
    agregarProductoCarrito(productoId, usuario.id);

  };

  //----------------Zona de useEffect------------------------------------//
  

  //----------------Zona para aplicar desctructuring a cada producto-----//
  const { id, name, price, image, car } = producto;

  return (
      <div className="bg-white pt-6 shadow-lg pb-6 mb-10">
        <div className="w-full">
          <img
            className="w-7/12  h-64 mx-auto"
            src={`${process.env.backend}/api/products/getImage/${image}`}
            alt={`Imagen ${name}`}
          ></img>
        </div>
        <div className="py-5">
          <h3 className="text-center text-2xl">{name}</h3>
          <p className="text-center text-3xl font-bold text-orange-500 mt-5">${price}</p>
        </div>
        { usuario 
        ?
        <div className="w-10/12 mx-auto">
          { car===0
          ?
          (<>
            <button
            className="bg-orange-500 text-white py-4 w-full"
            type="button"
            onClick={() => {
              añadirProducto(producto);
            }}
          >Añadir al carrito</button>
         
          </>  
          ) 
          : 
            <button
            className="bg-orange-600 text-white py-4 w-full"
            type="button"
            onClick={() => {
              añadirProducto(producto);
            }}
          >Añadido al carrito</button> 
          }
        </div>
        :
        <div className="w-10/12 mx-auto">
          <Link href='/registro'>
            <button  className="bg-orange-500 text-white py-4 w-full">Registrate para comprar</button>
          </Link>
        </div>
        }
       
      </div>

  );
};

export default Producto;
