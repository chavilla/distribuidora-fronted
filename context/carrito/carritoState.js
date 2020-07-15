import { useReducer } from 'react';
import CarritoContext from './carritoContext';
import carritoReducer from './carritoReducer';
import { AGREGAR_PRODUCTO_CARRITO } from '../../types';

const carritoState = (props) => {

    const initialState={
        productos:[]
    }

    const [state,dispatch]=useReducer(carritoReducer,initialState);

    return ( 
        <CarritoContext.Provider
        value={{
            productos:state.productos
        }}
        >

            {props.children}
        </CarritoContext.Provider>
     );
}
 
export default carritoState;