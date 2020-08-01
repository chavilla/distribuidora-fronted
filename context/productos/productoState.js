import { useReducer } from "react";
import productoContext from "./productoContext";
import productoReducer from "./productoReducer";
import { OBTENER_PRODUCTOS, AGREGAR_PRODUCTO_CARRITO, ESTABLECER_IMAGEN } from "../../types/";
import clienteAxios from '../../config/axios';
import { uploadImage } from "../../helper/uploadImage";

const productoState = ({ children }) => {
  const initialState = {
    productos: [],
    agregado: false,
    imagen:null
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

  const guardarProducto=async (producto)=>{
    try {
      const respuesta=await clienteAxios.post('api/products', producto);
      const id=respuesta.data.productStored.id;
      const upload=await uploadImage(`${process.env.backend}/api/products/image/${id}`,state.imagen,'image');
      console.log(upload);
    } catch (error) {
      console.log(error);
    }
  }

  const establecerImagen=(imagen)=>{
    dispatch({
      type:ESTABLECER_IMAGEN,
      payload:imagen
    })
  }

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
        imagen:state.imagen,
        agregado: state.agregado,
        obtenerProductos,
        añadirProductoCarrito,
        guardarProducto,
        establecerImagen
      }}
    >
      {children}
    </productoContext.Provider>
  );
};

export default productoState;
