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

    //obtenerProductos();
    useEffect(()=>{
        obtenerProductos();
    },[])

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
                    <Producto
                    key={producto.id}
                    producto={producto}
                    />
                )) }
            </div>
            </Section>

        </Layout>
     );
}
 
export default Tienda;