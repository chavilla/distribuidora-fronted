import React, {useContext} from 'react';
import Layout from '../components/layout/Layout';
import styled from '@emotion/styled';
import productoContext from '../context/productos/productoContext';

const Section=styled.section`
    height:300px;
    width:95%;
    margin: auto;

    @media(min-width:768px){
        width:90%;
    }
`;

const Tienda = () => {

    const { productos }=useContext(productoContext);

    return ( 
        <Layout>
            <div className="container">
                <h3 className="center">Tienda</h3>
            </div>

            <Section>


            </Section>

        </Layout>
     );
}
 
export default Tienda;