import {useReducer} from 'react';
import productoContext from './productoContext';
import productoReducer from './productoReducer';
import {OBTENER_PRODUCTOS} from '../../types/'; 

const productoState=({children})=>{

    const initialState={
        productos:[
            { id:1, nombre: 'Computador', precio:256 },
            { id:2, nombre: 'Televisor', precio:487 },
            { id:3, nombre: 'Escritorio', precio:120 },
            { id:4, nombre: 'Mouse', precio:10 },
            { id:5, nombre: 'Teclado', precio:15 },
            { id:6, nombre: 'Impresora', precio:50 },
            { id:7, nombre: 'Audífonos', precio:18 },
            { id:8, nombre: 'Scanner', precio:65 }
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