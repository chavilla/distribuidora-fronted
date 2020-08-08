import { useReducer } from 'react';
import CarritoContext from './carritoContext';
import carritoReducer from './carritoReducer';
import clienteAxios from '../../config/axios';
import { OBTENER_CARRITO ,AGREGAR_PRODUCTO_CARRITO, 
    AGREGAR_PRODUCTO_ERROR, AGREGADO_FALSE } from '../../types';

const carritoState = (props) => {

    const initialState={
        productosCarrito:[],
        agregado: false,
        mensaje:null
    }

    const [state,dispatch]=useReducer(carritoReducer,initialState);

    //Zona de funciones
    const obtenerCarrito=async (usuarioId)=>{
        try {       
            const respuesta=await clienteAxios.get(`api/car/${usuarioId}`);
            dispatch({
                type:OBTENER_CARRITO,
                payload: respuesta.data.products_car
            })
            
        } catch (error) {
            console.log(error);
        }
    }

    const añadirProductoCarrito =async (producto,usuario) => {

        if (producto.car===0) {
            producto.car=1
          }
          else{
            producto.car=0
          }

        const data={
          productId: producto,
          userId:usuario
        }
    
        try {
          const respuesta=await clienteAxios.post(`/api/car/`,data);
          dispatch({
            type: AGREGAR_PRODUCTO_CARRITO,
            payload: {
                respuesta:respuesta.data.msg,
                car: producto.car
            }
          })   
        } catch (error) {
          dispatch({
            type: AGREGAR_PRODUCTO_ERROR,
            payload: error.response.data.msg 
          })
        }
      };

      const agregadoFalse=()=>{
          dispatch({
              type: AGREGADO_FALSE
          })
      }

    return ( 
        <CarritoContext.Provider
        value={{
            productosCarrito:state.productosCarrito,
            agregado:state.agregado,
            mensaje:state.mensaje,
            obtenerCarrito,
            añadirProductoCarrito,
            agregadoFalse
        }}
        >

            {props.children}
        </CarritoContext.Provider>
     );
}
 
export default carritoState;