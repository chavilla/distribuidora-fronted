import React, { useContext } from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, Boton } from '../components/ui/Formulario';
import useValidacion from '../hooks/useValidacion';
import UsuarioContext from '../context/usuario/usuarioContext';

const stateInicial={
    email:'',
    password:''
}

const Login = (props) => {

    //Usar el context
    const { usuario,login_usuario }=useContext(UsuarioContext);

    const {valores,setValores,handleChange, handleSubmit}=useValidacion(stateInicial, loginUsuario);
    const { email, password }=valores;

    function loginUsuario(){
        login_usuario(valores);
        setValores({
            email:'',
            password:''
        })
    }
    
    return ( 
        <Layout>
            <div className="container">
                <Formulario
                onSubmit={handleSubmit}
                >
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