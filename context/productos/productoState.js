import {useReducer} from 'react';
import productoContext from './productoContext';
import productoReducer from './productoReducer';
import {OBTENER_PRODUCTOS} from '../../types/'; 

const productoState=({children})=>{

    const initialState={
        productos:[
            { id:1, nombre: 'computador', precio:256 },
            { id:2, nombre: 'televisor', precio:487 },
            { id:3, nombre: 'escritorio', precio:120 },
            { id:4, nombre: 'mouse', precio:10 },
            { id:5, nombre: 'teclado', precio:15 },
            { id:6, nombre: 'impresora', precio:50 },
            { id:7, nombre: 'audífonos', precio:18 },
            { id:8, nombre: 'escaner', precio:65 }
        ]
    }
    const [state,dispatch]=useReducer(productoReducer,initialState);

    const obtenerProductos=()=>{
        dispatch({
            type:OBTENER_PRODUCTOS,
            payload:state.productos
        })
    }

    return(
        <productoContext.Provider
        value={{
            productos:state.productos,
            obtenerProductos
        }}
        >

        {children}
        </productoContext.Provider>
    )
}

export default productoState;