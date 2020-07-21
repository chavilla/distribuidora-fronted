import React from 'react';
import { css } from '@emotion/core';
import { Formulario, Campo, Boton } from '../components/ui/Formulario';
import Layout from '../components/layout/Layout';
import styled from '@emotion/styled';

const  Producto= () => {

    const Section=styled.section`
    width:95%;
    margin: 0 auto;

    @media(min-width:768px){
        width:90%;
    }
`;

    return ( 
        <Layout>
            <div className='container'
            css={
                css `padding-top:2rem;`
            }
            >
                <h2 className='center'>Subir Producto</h2>
            </div>

            <Formulario>
                <Campo>
                    <input placeholder="Nombre Producto" 
                    id="first_name" 
                    type="text" 
                    className="" 
                    />  
                </Campo>
                <Campo>
                    <input id="last_name" 
                    type="number" 
                    className=""/>
                </Campo>
            </Formulario>
              
        </Layout>
     );
}
 
export default Producto;