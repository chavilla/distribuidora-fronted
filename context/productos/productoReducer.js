import {
    OBTENER_PRODUCTOS,
    AGREGAR_PRODUCTO_CARRITO
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
        default:{
            return state;
        }
    }
}