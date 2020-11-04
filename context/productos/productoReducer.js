import {
    OBTENER_PRODUCTOS,
    AGREGAR_PRODUCTO_CARRITO,
    ESTABLECER_IMAGEN,
    AGREGAR_PRODUCTO_ERROR,
    AGREGADO_FALSE,
    LOADING,
    OBTENER_PRODUCTOS_CATEGORIA
} from '../../types/';

export default (state,action)=>{
    switch(action.type){

        case LOADING:
            return{
                ...state,
                loading:action.payload  
            }

        case OBTENER_PRODUCTOS:
        case OBTENER_PRODUCTOS_CATEGORIA:
            return{
                ...state,
                productos:action.payload.setProducts,
                loading:action.payload.setLoading
            }
        case AGREGAR_PRODUCTO_CARRITO:
            return{
                ...state,
                productos: state.productos.map(producto=> producto.id === action.payload.id ? action.payload : producto ),
            }
        case AGREGAR_PRODUCTO_ERROR:
            return{
                ...state,
                errorAgregado: true
            }
        case ESTABLECER_IMAGEN:
            return{
                ...state,
                imagen:action.payload
            }
        case AGREGADO_FALSE:
            return{
                ...state,
                errorAgregado:false
            }
        default:{
            return state;
        }
    }
}