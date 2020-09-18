import { useReducer } from "react";
import productoContext from "./productoContext";
import productoReducer from "./productoReducer";
import { OBTENER_PRODUCTOS, 
  AGREGAR_PRODUCTO_CARRITO, ESTABLECER_IMAGEN, 
  AGREGAR_PRODUCTO_ERROR, AGREGADO_FALSE , 
  LOADING} 
  from "../../types/";
import clienteAxios from '../../config/axios';
import { uploadImage } from "../../helper/uploadImage";

const productoState = ({ children }) => {
  const initialState = {
    productos: [],
    errorAgregado: false,
    imagen:null,
    loading:false
  };
  const [state, dispatch] = useReducer(productoReducer, initialState);

  const obtenerProductos = async () => {
    try {

     
        dispatch({
          type: LOADING,
          payload:true
        });   
     
        
      const respuesta=await clienteAxios.get('api/products');
      
      setTimeout(() => {
        dispatch({
          type: OBTENER_PRODUCTOS,
          payload: {
            setProducts:respuesta.data.products,
            setLoading: false
          }
        });
      }, 1000);

    } catch (error) {
      console.log(error);
    }
  };

  const guardarProducto=async (producto)=>{
    try {
      const respuesta=await clienteAxios.post('api/products', producto);
      const id=respuesta.data.productStored.id;
      const upload=await uploadImage(`${process.env.backend}/api/products/image/${id}`,state.imagen,'image');
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

  const agregarProductoCarrito =async (producto,usuario) => {

    if (producto.car===0) {
        producto.car=1
      }
      else{
        producto.car=0
      }

    const data={
      productId: producto.id,
      userId:usuario
    }

    try {
      const respuesta=await clienteAxios.post(`/api/car/`,data);
      dispatch({
        type: AGREGAR_PRODUCTO_CARRITO,
        payload:producto,
      
      })   
    } catch (error) {
      dispatch({
        type: AGREGAR_PRODUCTO_ERROR,
        payload: error.response.data.msg 
      })
    }
  };

  const agregadoFalse=()=>{
    dispatch({
        type: AGREGADO_FALSE
    })
}
 

  return (
    <productoContext.Provider
      value={{
        productos: state.productos,
        imagen:state.imagen,
        errorAgregado: state.errorAgregado,
        loading:state.loading,
        obtenerProductos,
        guardarProducto,
        establecerImagen,
        agregarProductoCarrito,
        agregadoFalse
      }}
    >
      {children}
    </productoContext.Provider>
  );
};

export default productoState;
