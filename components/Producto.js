import React, { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Productocontext from "../context/productos/productoContext";
import clienteAxios from 'axios';

const Producto = ({ producto }) => {
  //styled components
  const Img = styled.img`
    min-width: 100%;
    max-height: 250px;
    display: block;
  `;

  const BotonProducto = styled.button`
    border: none;
    padding: 1rem 2rem;
    background-color: #ed7b25;
    color: white;
    display: block;
    width: 100%;
    margin: 0 auto;
    cursor: pointer;
  `;

  const Precio = styled.span`
    display: block;
    text-align: center;
    font-size: 1.7rem;
    font-weight: bold;
  `;
  //fin styled

  //context de productos
  const { productos, añadirProductoCarrito, obtenerProductos } = useContext(Productocontext);

 
  const añadirProducto = (producto) => {
    producto.carrito = true;
    añadirProductoCarrito(producto);

  };

  const { name, price, image } = producto;

  return (
    <div
      className="col s12 m6 l3"
      css={css `
        margin: 1rem 0;
      `}
    >
      <div className="card">
        <div className="card-image">
          <Img src={`http://localhost:4000/api/products/getImage/${image}`} alt={`Imagen ${name}`}></Img>
        </div>
        <div className="card-content">
          <h3
            className="center"
            css={css `
              font-size: 2rem;
            `}
          >
            {name}
          </h3>
          <Precio className="center">${price}</Precio>
        </div>
        <div className="card-action">
          <BotonProducto
            type="button"
            onClick={() => {
              añadirProducto(producto);
            }}>
              Añadir al carrito
          </BotonProducto>
        </div>
      </div>
    </div>
  );
};

export default Producto;
