import { useReducer } from "react";
import productoContext from "./productoContext";
import productoReducer from "./productoReducer";
import {
  OBTENER_PRODUCTOS,
  AGREGAR_PRODUCTO_CARRITO,
  ESTABLECER_IMAGEN,
  AGREGAR_PRODUCTO_ERROR,
  AGREGADO_FALSE,
  LOADING,
  OBTENER_PRODUCTOS_CATEGORIA,
} from "../../types/";
import clienteAxios from "../../config/axios";
import { uploadImage } from "../../helper/uploadImage";

const productoState = ({ children }) => {
  const initialState = {
    productos: [],
    errorAgregado: false,
    imagen: null,
    loading: false,
  };
  const [state, dispatch] = useReducer(productoReducer, initialState);

  const obtenerProductos = async () => {
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });

      const respuesta = await clienteAxios.get("api/products");

      dispatch({
        type: OBTENER_PRODUCTOS,
        payload: {
          setProducts: respuesta.data.products,
          setLoading: false,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerProductosPorCategoria = async (categoria) => {
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });

      const respuesta = await clienteAxios.get(
        `api/products/category?category=${categoria}`
      );

      dispatch({
        type: OBTENER_PRODUCTOS_CATEGORIA,
        payload: {
          setProducts: respuesta.data,
          setLoading: false,
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const guardarProducto = async (producto) => {
    try {
      const respuesta = await clienteAxios.post("api/products", producto);
      const id = respuesta.data.productStored.id;
      const upload = await uploadImage(
        `${process.env.backend}/api/products/image/${id}`,
        state.imagen,
        "image"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const establecerImagen = (imagen) => {
    dispatch({
      type: ESTABLECER_IMAGEN,
      payload: imagen,
    });
  };

  const agregarProductoCarrito = async (producto, usuario) => {
    if (producto.car === 0) {
      producto.car = 1;
    } else {
      producto.car = 0;
    }

    const data = {
      productId: producto.id,
      userId: usuario,
    };

    try {
      const respuesta = await clienteAxios.post(`/api/car/`, data);
      dispatch({
        type: AGREGAR_PRODUCTO_CARRITO,
        payload: producto,
      });
    } catch (error) {
      dispatch({
        type: AGREGAR_PRODUCTO_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  const agregadoFalse = () => {
    dispatch({
      type: AGREGADO_FALSE,
    });
  };

  return (
    <productoContext.Provider
      value={{
        productos: state.productos,
        imagen: state.imagen,
        errorAgregado: state.errorAgregado,
        loading: state.loading,
        obtenerProductos,
        obtenerProductosPorCategoria,
        guardarProducto,
        establecerImagen,
        agregarProductoCarrito,
        agregadoFalse,
      }}
    >
      {children}
    </productoContext.Provider>
  );
};

export default productoState;
