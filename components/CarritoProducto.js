import React, {useContext} from 'react';
import CarritoContext from '../context/carrito/carritoContext';

const CarritoProducto = ({producto}) => {

    //Zona de leer el context
    const { productosCarrito }=useContext(CarritoContext);

    //Extraer las propiedades del producto
    const { name, price, stock, image}=producto;

    return ( 
        <div className='border my-2 bg-white'>
            <div className='border py-4'></div>
            <h2 className='text-center my-3 text-2xl'>{name}</h2>
            <img
            src={`${process.env.backend}/api/products/getImage/${image}`}
            alt={`Imagen ${name}`}
          ></img>
          <div className='grid grid-cols-2'>
          <p className='my-5 ml-5 text-xl'>Precio</p> <span className='font-bold text-2xl text-right mr-5 my-5'>${price}</span>
          </div>
          <div className='flex justify-between border py-4'>
              <label className='ml-5'>Cantidad</label>
          <input type='number' className='w-12 mr-5 border-gray border'/>
          </div>
          <div className='grid grid-cols-2'>
          <p className='my-5 ml-5 text-xl'>Subtotal</p> <span className='font-bold text-2xl text-right mr-5 my-5'>${price}</span>
          </div>
        </div>
     );
}
 
export default CarritoProducto;
