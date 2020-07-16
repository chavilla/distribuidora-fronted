import React, { useContext } from 'react';
import { css } from '@emotion/core';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, Boton } from '../components/ui/Formulario';
import { useFormik } from 'formik';
import UsuarioContext from '../context/usuario/usuarioContext';

const Login = (props) => {

    const formik=useFormik({
        initialValues:{
          email: "",
          nombre: "",
          password: "",
        },
        onSubmit:(values)=>{
          console.log(values);
        }
      })
    
      return (
        <Layout>
          <div className="container" 
          css={css `
            padding-top:4rem;
          `}
          >
            <Formulario
            onSubmit={formik.handleSubmit}
            >
              <h3
                className="center"
                css={css `
                  margin-bottom: 2rem;
                `}
              >
                Ingresa tus datos
              </h3>
              <Campo>
                <input
                  placeholder="Email"
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></input>
              </Campo>
    
              <Campo>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></input>
              </Campo>
    
              <Boton>Registrarse</Boton>
            </Formulario>
          </div>
        </Layout>
      );
}
 
export default Login;