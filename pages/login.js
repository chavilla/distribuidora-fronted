import React from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, Boton } from '../components/ui/Formulario';
import useValidacion from '../hooks/useValidacion';

const stateInicial={
    email:'',
    nombre:'',
    password:''
}

const Login = (props) => {

  
    const {valores,handleChange}=useValidacion(stateInicial);

    const { email, nombre, password }=valores;

    return ( 
        <Layout>
            <div className="container">
                <Formulario>
                    <h3 className="center" css={css `margin-bottom:2rem;`}>Ingresa tus datos</h3>
                    <Campo>  
                        <input 
                        placeholder="Email" 
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        ></input>
                    </Campo>

                    <Campo>
                        <input 
                        type="text" 
                        placeholder="Nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                        ></input>
                    </Campo>

                    <Campo>
                        <input 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        ></input>
                    </Campo>

                    <Boton>
                        Iniciar Sesión
                    </Boton>

                </Formulario>
            </div>
        </Layout>
     );
}
 
export default Login;