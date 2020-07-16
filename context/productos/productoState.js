import {useReducer} from 'react';
import productoContext from './productoContext';
import productoReducer from './productoReducer';
import {
    OBTENER_PRODUCTOS,
    AGREGAR_PRODUCTO_CARRITO
} from '../../types/'; 

const productoState=({children})=>{

    const initialState={
        productos:[
            { id:1, nombre: 'computador', precio:256, carrito:false },
            { id:2, nombre: 'televisor', precio:487, carrito:false },
            { id:3, nombre: 'escritorio', precio:120, carrito:false },
            { id:4, nombre: 'mouse', precio:10, carrito:false },
            { id:5, nombre: 'teclado', precio:15, carrito:false },
            { id:6, nombre: 'impresora', precio:50, carrito:false },
            { id:7, nombre: 'audífonos', precio:18, carrito:false },
            { id:8, nombre: 'escaner', precio:65, carrito:false }
        ]
    }
    const [state,dispatch]=useReducer(productoReducer,initialState);

    const obtenerProductos=()=>{
        dispatch({
            type:OBTENER_PRODUCTOS,
            payload:state.productos
        })
    }

    const añadirProductoCarrito=(producto)=>{
        console.log(producto);
        dispatch({
            type: AGREGAR_PRODUCTO_CARRITO,
            payload: producto
        })
    }

    return(
        <productoContext.Provider
        value={{
            productos:state.productos,
            obtenerProductos,
            añadirProductoCarrito
        }}
        >

        {children}
        </productoContext.Provider>
    )
}

export default productoState;