import {
    OBTENER_PRODUCTOS,
    AGREGAR_PRODUCTO_CARRITO
} from '../../types/';

export default (state,action)=>{
    switch(action){
        case OBTENER_PRODUCTOS:
            return{
                ...state,
                productos:action.payload
            }
        case AGREGAR_PRODUCTO_CARRITO:
            return{
                ...state
            }
        default:{
            return state;
        }
    }
}