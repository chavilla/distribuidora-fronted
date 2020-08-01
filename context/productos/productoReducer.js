import {
    OBTENER_PRODUCTOS,
    AGREGAR_PRODUCTO_CARRITO,
    ESTABLECER_IMAGEN
} from '../../types/';

export default (state,action)=>{
    switch(action.type){
        case OBTENER_PRODUCTOS:
            return{
                ...state,
                productos:action.payload
            }
        case AGREGAR_PRODUCTO_CARRITO:
            return{
                ...state,
                productos: state.productos.map(producto=> producto.id === action.payload.id ? action.payload : producto ),
            }
        case ESTABLECER_IMAGEN:
            return{
                ...state,
                imagen:action.payload
            }
        default:{
            return state;
        }
    }
}