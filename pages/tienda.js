import React, {useContext, useEffect} from 'react';
import Layout from '../components/layout/Layout';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import productoContext from '../context/productos/productoContext';
import Producto from '../components/Producto';

const Section=styled.section`
    width:95%;
    margin: 5rem auto;


    @media(min-width:768px){
        width:90%;
    }
`;

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

const Tienda = () => {

    const { productos, añadirProductoCarrito ,obtenerProductos}=useContext(productoContext);

    const añadirProducto = (producto) => {
        producto.carrito = true;
        añadirProductoCarrito(producto);
        obtenerProductos();
      };

    return ( 
        <Layout>
            <div className="container" 
            css={
                css `padding-top:2rem;`
            }
            >
                <h3 className="center" 
                css={css `text-transform:uppercase;`
                }>Tienda</h3>
            </div>

            <Section>
            <div className="row">
                { productos.map(producto=>(
                    <div
                    className="col s12 m6 l3"
                    key={producto.id}
                    css={css `
                      margin: 1rem 0;
                    `}
                  >
                    <div className="card">
                      <div className="card-image">
                        <Img src={`./static/img/${producto.nombre}.jpg`}></Img>
                      </div>
                      <div className="card-content">
                        <h3
                          className="center"
                          css={css `
                            font-size: 2rem;
                          `}
                        >
                          {producto.nombre}
                        </h3>
                        <Precio className="center">${producto.precio}</Precio>
                      </div>
                      <div className="card-action">
                        <BotonProducto
                          type="button"
                          className={producto.carrito ? "orange lighten-2" : null}
                          onClick={() => {
                            añadirProducto(producto);
                          }}
                        >
                          {producto.carrito ? "Añadido al carrito" : "Añadir al carrito"}
                        </BotonProducto>
                      </div>
                    </div>
                  </div>
                )) }
            </div>
            </Section>

        </Layout>
     );
}
 
export default Tienda;