import React, { useContext } from "react";
import Productocontext from "../context/productos/productoContext";
import Usuariocontext from "../context/usuario/usuarioContext";
import {ThemeProvider} from '@material-ui/core';
import theme from './themeConfig';



const Producto = ({ producto }) => {
  //----------------zona para extraer context----------------------------//
   const {  agregarProductoCarrito } = useContext(Productocontext);

  const { usuario } = useContext(Usuariocontext); 

  //----------------Zona de ejecucion de funciones-----------------------//
   const añadirProducto = (productoId) => {
    agregarProductoCarrito(productoId, usuario.id);
  }; 

  //----------------Zona para aplicar desctructuring a cada producto-----//
  const { id,name, price, image, car } = producto;


  return (
    <ThemeProvider theme={theme}>
        <div className="card">
        <div className="card-img">
          <img src={`${process.env.backend}/api/products/getImage/${image}`} alt="lampara" />
        </div>
        <div className="card-info">
          <form>
            <p className="clasificacion text-center">
              <input id="radio1" type="radio" name="estrellas" value="5" />
              <label htmlFor="radio1">★</label>
              <input id="radio2" type="radio" name="estrellas" value="4" />
              <label htmlFor="radio2">★</label>
              <input id="radio3" type="radio" name="estrellas" value="3" />
              <label htmlFor="radio3">★</label>
              <input id="radio4" type="radio" name="estrellas" value="2" />
              <label htmlFor="radio4">★</label>
              <input id="radio5" type="radio" name="estrellas" value="1" />
              <label htmlFor="radio5">★</label>
            </p>
            <p className="text-center">Opiniones</p>
          </form>
          <h3 className="text-center">{name}</h3>
          <p className="price text-center">$ {price}</p>
          <p className="name text-center">
            Lámpara Tubular negra apropiada para escritorio o para una
            habitación.
          </p>
          <button type="button" className="btn-car" onClick={()=>añadirProducto(producto)}>
            <img src="/static/img/carro.png" alt="carro" />
            Añadir
          </button>
        </div>
      </div>
      </ThemeProvider>
  );
};

export default Producto;
