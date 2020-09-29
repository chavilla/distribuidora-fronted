import { OBTENER_CARRITO, AGREGAR_PRODUCTO_CARRITO, AGREGAR_PRODUCTO_ERROR,
AGREGADO_FALSE, ESTABLECE_ORDEN, VENTA_EXITO,  LOADING,
ELIMINAR_PRODUCTO_CARRITO
} from '../../types';

export default (state,action)=>{
    switch(action.type){

        case LOADING:
            return{
                ...state,
                loading:action.payload  
            }

        case OBTENER_CARRITO:
            return{
                ...state,
                productosCarrito:action.payload.car,
                order: action.payload.order,
                loading:action.payload.setLoading
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

        case ELIMINAR_PRODUCTO_CARRITO:
            return{
                ...state,
                productosCarrito: state.productosCarrito.filter(item=> item.idCar !==action.payload.idCar ),
                order: state.order.filter(item=> item.id !== action.payload.idProduct)
            }

        case VENTA_EXITO:
            return{
                ...state,
                mensaje: `Producto comprado exitosamente. ID del pago: ${action.payload}`
            }
        default:
            return state;
    }
}