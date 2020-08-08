import { OBTENER_CARRITO, AGREGAR_PRODUCTO_CARRITO, AGREGAR_PRODUCTO_ERROR,
AGREGADO_FALSE } from '../../types';

export default (state,action)=>{
    switch(action.type){
        case OBTENER_CARRITO:
            return{
                ...state,
                productosCarrito:action.payload
            }
        case AGREGAR_PRODUCTO_CARRITO:
            return{
                ...state,
                agregado: true,
            }
        case AGREGAR_PRODUCTO_ERROR:
            return{
                ...state,
                mensaje: action.payload,
                agregado:false
            }
        case AGREGADO_FALSE:
            return{
                ...state,
                agregado: false
            }
        default:
            return state;
    }
}