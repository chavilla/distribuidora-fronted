import { useReducer } from 'react';
import CarritoContext from './carritoContext';
import carritoReducer from './carritoReducer';
import clienteAxios from '../../config/axios';
import { OBTENER_CARRITO } from '../../types';

const carritoState = (props) => {

    const initialState={
        productosCarrito:[]
    }

    const [state,dispatch]=useReducer(carritoReducer,initialState);

    //Zona de funciones
    const obtenerCarrito=async ()=>{
        try {
            const respuesta=await clienteAxios.get('api/products/car');
            dispatch({
                type:OBTENER_CARRITO,
                payload: respuesta.data.products
            })
            
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <CarritoContext.Provider
        value={{
            productosCarrito:state.productosCarrito,
            obtenerCarrito
        }}
        >

            {props.children}
        </CarritoContext.Provider>
     );
}
 
export default carritoState;