import { OBTENER_CARRITO, AGREGAR_PRODUCTO_CARRITO, AGREGAR_PRODUCTO_ERROR,
AGREGADO_FALSE, ESTABLECE_ORDEN } from '../../types';

export default (state,action)=>{
    switch(action.type){
        case OBTENER_CARRITO:
            return{
                ...state,
                productosCarrito:action.payload.car,
                order: action.payload.order
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
        case ESTABLECE_ORDEN:
            return{
                ...state,
                order: state.order.map(order=> order.id===action.payload.id ? action.payload : order )
            }
        default:
            return state;
    }
}