import React, { useContext, useEffect } from "react";
import Link from 'next/link';
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import { useFormik } from "formik";
import UsuarioContext from "../context/usuario/usuarioContext";
import { useRouter } from "next/router";
import * as Yup from "yup";
import Spinner from "../components/layout/Spinner";

const Login = () => {
  const router = useRouter();
  const { mensaje, autenticado, loginUsuario, loading } = useContext(
    UsuarioContext
  );

  useEffect(() => {
    if (autenticado && !loading) {
      router.push("/");
    }
  }, [autenticado, loading]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required("El Email es campo requerido")
        .email("El email no es válido"),
      password: Yup.string().required("La contraseña es campo requerido"),
    }),

    onSubmit: (values) => {
      loginUsuario(values);
    },
  });

  return (
    <Layout>
        {loading ? (
          <Spinner />
        ) : (
          <div className="ctn-frm">
            <div className="ctn-register">
              <h2 className='title-form'>Soy un nuevo cliente</h2>
              <p>Al Crear tu cuenta en Chavicode puedes hacer lo siguiente:</p>
              <ul className='list-bene'>
                <li>Comprar en exclusiva cualquier artículo de esta web</li>
                <li>Volver en un futuro y revisar tus pedidos</li>
                <li>Recibir Ofertas exclusivas para los registrados en la web</li>
              </ul>
              <Link href="/registro">
                <a className='btnToRegister'>Registrarse</a>
              </Link>
            </div>
            <form  onSubmit={formik.handleSubmit} >
              <h2 className='title-form'>Ya Soy Cliente</h2>
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

export default Login;
