import { OBTENER_CARRITO } from '../../types';

export default (state,action)=>{
    switch(action.type){
        case OBTENER_CARRITO:
            return{
                ...state,
                productosCarrito:action.payload
            }
        default:
            return state;
    }
}