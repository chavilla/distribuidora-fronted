import { useReducer } from "react";
import CarritoContext from "./carritoContext";
import carritoReducer from "./carritoReducer";
import clienteAxios from "../../config/axios";
import {
  OBTENER_CARRITO,
  AGREGAR_PRODUCTO_CARRITO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGADO_FALSE,
  ESTABLECE_ORDEN,
  VENTA_EXITO
} from "../../types";

const carritoState = (props) => {
  const initialState = {
    productosCarrito: [],
    agregado: false,
    mensaje: null,
    order: []
  };

  const [state, dispatch] = useReducer(carritoReducer, initialState);

  //Zona de funciones-----------------------------------------//----------------------------------------------//

  /** ------------------ Obtiene el carrito cuando el usuario entra a ver el propio-------------------------  */
  const obtenerCarrito = async (usuarioId) => {
    try {
      const respuesta = await clienteAxios.get(`api/car/${usuarioId}`);
      // Editar los productos del carrito para hacer un state de ordenes
      const data_edit=respuesta.data.products_car;
      let order_empty=[]
      data_edit.map(data=>{
          const item={
            id: data.productId,
            name:data.name,
            count:1,
            price: data.price,
            userId:data.usuarioId
          }
          order_empty.push(item);
        })


      dispatch({
        type: OBTENER_CARRITO,
        payload: {
          car:respuesta.data.products_car,
          order:order_empty
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  //----------Se añade un producto al carrito------------------------//
  const añadirProductoCarrito = async (producto, usuario) => {
    if (producto.car === 0) {
      producto.car = 1;
    } else {
      producto.car = 0;
    }

    const data = {
      productId: producto,
      userId: usuario,
    };

    try {
      const respuesta = await clienteAxios.post(`/api/car/`, data);
      dispatch({
        type: AGREGAR_PRODUCTO_CARRITO,
        payload: {
          respuesta: respuesta.data.msg,
          car: producto.car,
        },
      });
    } catch (error) {
      dispatch({
        type: AGREGAR_PRODUCTO_ERROR,
        payload: error.response.data.msg,
      });
    }
  };


  //--------- Cada vez que el usuario modifica la cantidad se actualiza la orden----------//
  const updateOrder=(id,name,count,subtotal,userId)=>{
    const orderUpdated={
      id,
      name,
      count,
      subtotal,
      userId
    }

    dispatch({
      type:ESTABLECE_ORDEN,
      payload: orderUpdated
    })

  }

  const agregadoFalse = () => {
    dispatch({
      type: AGREGADO_FALSE,
    });
  };

  //--------------------Ejecuta una venta una vez el pago se ha hecho efectivo-------------------//
  const setSale =async (sale) =>{
    
    try {
      const respuesta=await clienteAxios.post('/api/sales/', sale);

      dispatch({
        type: VENTA_EXITO,
        payload: respuesta.data.payment
      })

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CarritoContext.Provider
      value={{
        productosCarrito: state.productosCarrito,
        agregado: state.agregado,
        mensaje: state.mensaje,
        order: state.order,
        updateOrder,
        obtenerCarrito,
        añadirProductoCarrito,
        agregadoFalse,
        setSale
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};

export default carritoState;
