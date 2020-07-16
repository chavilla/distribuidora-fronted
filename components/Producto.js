import React, {useContext, useEffect} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import Productocontext from '../context/productos/productoContext';

const Producto = ({producto}) => {

    //styled components
    const Img=styled.img`
        min-width:100%;
        max-height:250px;
        display: block;
    `;

    const BotonProducto=styled.button`
        border:none;
        padding: 1rem 2rem;
        background-color:#ED7B25;
        color:white;
        display:block;
        width:100%;
        margin:0 auto;
        cursor: pointer;
    `;

    const Precio=styled.span`
        display:block;
        text-align:center; 
        font-size:1.7rem; 
        font-weight:bold;
    `;
    //fin styled 

    //context de productos
    const {obtenerProductos,añadirProductoCarrito }=useContext(Productocontext);

    obtenerProductos();

    const añadirProducto=producto=>{
        producto.carrito=true;
        añadirProductoCarrito(producto);
    }

    const { nombre, precio, carrito }=producto;

    return ( 
       
            <div className="col s12 m6 l3"
            css={css `
                margin: 1rem 0;
            `}>
                <div className="card">
                    <div className="card-image">
                        <Img src={`./static/img/${nombre}.jpg`}></Img>
                    </div>
                    <div className="card-content">
                        <h3 className='center' css={css `font-size:2rem;`}>{nombre}</h3>
                        <Precio className='center'>${precio}</Precio>
                    </div>
                    <div className="card-action">
                        <BotonProducto
                        type='button'
                        className={carrito ? 'orange lighten-2': null}
                        onClick={()=>{añadirProducto(producto)}}
                        >{carrito ? 'Añadido al carrito': 'Añadir al carrito'}</BotonProducto>
                    </div>
                </div>
            </div>
     );
}
 
export default Producto;