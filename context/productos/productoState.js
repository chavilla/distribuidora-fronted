import { useReducer } from "react";
import productoContext from "./productoContext";
import productoReducer from "./productoReducer";
import { OBTENER_PRODUCTOS, AGREGAR_PRODUCTO_CARRITO } from "../../types/";
import clienteAxios from '../../config/axios';

const productoState = ({ children }) => {
  const initialState = {
    productos: [],
    agregado: false
  };
  const [state, dispatch] = useReducer(productoReducer, initialState);

  const obtenerProductos = async () => {
    try {
      const respuesta=await clienteAxios.get('api/products');  
      dispatch({
        type: OBTENER_PRODUCTOS,
        payload: respuesta.data.products
      }); 
    } catch (error) {
      console.log(error);
    }
  };

  const añadirProductoCarrito =async (producto) => {
    const respuesta=await clienteAxios.put(`/api/products/${producto.id}`);
    if (producto.car===0) {
      producto.car=1
    }
    else{
      producto.car=0
    }
    dispatch({
      type: AGREGAR_PRODUCTO_CARRITO,
      payload: producto
    })
  };

  return (
    <productoContext.Provider
      value={{
        productos: state.productos,
        agregado: state.agregado,
        obtenerProductos,
        añadirProductoCarrito,
      }}
    >
      {children}
    </productoContext.Provider>
  );
};

export default productoState;
