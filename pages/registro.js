import React, { useContext, useEffect } from "react";
import Link from 'next/link';
import Spinner from '../components/layout/Spinner';
import Layout from "../components/layout/Layout";
import UsuarioContext from "../context/usuario/usuarioContext";
import { useRouter } from 'next/router';
import { useFormik } from "formik";
import * as Yup from "yup";


const Registro = (props) => {
  //obtener el context
  const { mensaje, crearUsuario, loading, autenticado } = useContext(UsuarioContext);

  /** Formik para el el formulario   */
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es campo requerido"),
      email: Yup.string()
        .required("El Email es campo requerido")
        .email("El email no es válido"),
      password: Yup.string()
        .required("La contraseña es campo requerido")
        .min(8, "La contraseña debe tener mínimo 8 caracteres"),
    }),

    onSubmit: (values) => {
      crearUsuario(values);
    },
  });

  const router=useRouter();
  useEffect(()=>{
    if(autenticado && !loading){
      router.push('/');
    }
  },[autenticado,loading]);

  return (
    <Layout>
        {loading ? (
          <Spinner />
        ) : (
          <div className="ctn-frm">
            <div className="ctn-register">
              <h2 className='title-form'>Ya soy cliente</h2>
              <p>Al Crear tu cuenta en Chavicode puedes hacer lo siguiente:</p>
              <ul className='list-bene'>
                <li>Comprar en exclusiva cualquier artículo de esta web</li>
                <li>Volver en un futuro y revisar tus pedidos</li>
                <li>Recibir Ofertas exclusivas para los registrados en la web</li>
              </ul>
              <Link href="/login">
                <a className='btnToRegister'>Ir a login</a>
              </Link>
            </div>
            <form  onSubmit={formik.handleSubmit} >
              <h2 className='title-form'>Registrarme</h2>
              <div className='campo'>
              <label htmlFor="email">Email*</label>
              <input
                id="email"
                name="email"
                className="text-field"
                placeholder="Introduce Tu Email Aquí"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="error">{formik.errors.email}</p>
              ) : null}
              </div>

              <div className='campo'>
              <label htmlFor="name">Nombres*</label>
              <input
                id="name"
                name="name"
                className="text-field"
                placeholder="Introduce Tu Email Aquí"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="error">{formik.errors.name}</p>
              ) : null}
              </div>

              <div className='campo'>
              <label>Password*</label>
              <input
                name="password"
                type="password"
                className="text-field"
                placeholder="Introduce Tu Password Aquí"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.password && formik.errors.password ? (
                <p className='error'>{formik.errors.password}</p>
              ) : null}

              </div>
              <div className='campo'>
              <button type="submit">
                <p color="primary">Ingresar</p>
              </button>
              {mensaje ? <p color="error">{mensaje}</p> : null}
              </div>
            </form>
          </div>
        )}
    </Layout>
  );
};

export default Registro;
