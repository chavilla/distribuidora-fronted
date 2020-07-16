import React, { useContext } from "react";
import { css } from "@emotion/core";
import Layout from "../components/layout/Layout";
import UsuarioContext from '../context/usuario/usuarioContext';
import { Formulario, Campo, Boton } from "../components/ui/Formulario";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Registro = (props) => {

  //obtener el context
  const { mensaje, crearUsuario }=useContext(UsuarioContext);

  const formik=useFormik({
    initialValues:{
      email: "",
      name: "",
      password: "",
    },

    validationSchema:Yup.object({
      name:Yup.string().required('El nombre es campo requerido'),
      email:Yup.string().required('El Email es campo requerido').email('El email no es válido'),
      password:Yup.string().required('La contraseña es campo requerido').min(8,'La contraseña debe tener mínimo 8 caracteres')
    }),

    onSubmit:(values)=>{
      crearUsuario(values);
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
              margin-bottom: rem;
            `}
          >
           Tus datos
          </h3>
          <Campo className='input-field'>
            <input
              placeholder="Email"
              type="text"
              className=''
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>
            
          </Campo>
          {formik.touched.email && formik.errors.email 
            ?
              <div className="col error s12 red lighten-3">
                <p>{formik.errors.email}</p>
              </div>
            : null
            }

          <Campo className='input-field'>
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>
          </Campo>
          {formik.touched.name && formik.errors.name 
            ?
              <div className="col error s12 red lighten-3">
                <p>{formik.errors.nombre}</p>
              </div>
            : null
            }

          <Campo className='input-field'>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>
          </Campo>
          {formik.touched.password && formik.errors.password 
            ?
              <div className="col error s12 red lighten-3">
                <p>{formik.errors.password}</p>
              </div>
            : null
            }
          <Boton type="submit">Registrarse</Boton>
          {mensaje ? (<p className="error-data red lighten-3 ">{mensaje}</p>):null}
        </Formulario>
      </div>
    </Layout>
  );
};

export default Registro;
