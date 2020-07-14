import React, {useContext} from 'react';
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

const Tienda = () => {

    const { productos }=useContext(productoContext);

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