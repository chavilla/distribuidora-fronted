import React, { useContext } from "react";
import { css } from "@emotion/core";
import Layout from "../components/layout/Layout";
import UsuarioContext from "../context/usuario/usuarioContext";
import { Formulario, Campo, Boton } from "../components/ui/Formulario";
import { useFormik } from "formik";
import * as Yup from "yup";

const Registro = (props) => {
  //obtener el context
  const { mensaje, crearUsuario } = useContext(UsuarioContext);

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

  return (
    <Layout>
      <div
        className="container mx-auto"
        css={css `
          padding-top: 4rem;
        `}
      >
        <form
          className="bg-white w-11/12 mx-auto py-6 px-5 mb-12 sm:w-9/12 md:w-1/2 lg:w-1/3 lg:mx-auto lg:py-12 lg:px-8 lg:mb-32"
          onSubmit={formik.handleSubmit}
        >
          <h3 className="center uppercase text-2xl text-center md:text-3xl">
            Introduce tus datos
          </h3>

          <input
            placeholder="Email"
            type="text"
            className="border py-2 px-3 mx-auto mt-8 my w-full rounded shadow-md"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.email && formik.errors.email ? (
            <div className="alert bg-red-400 text-white py-2 text-center my-2">
              <p>{formik.errors.email}</p>
            </div>
          ) : null}

          <input
            type="text"
            placeholder="Nombre"
            name="name"
            className="border py-2 px-3 mx-auto mt-8 my w-full rounded shadow-md"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>

          {formik.touched.name && formik.errors.name ? (
            <div className="alert bg-red-400 text-white py-2 text-center my-2">
              <p>{formik.errors.name}</p>
            </div>
          ) : null}

          <input
            type="password"
            placeholder="Password"
            className="border py-2 px-3 mx-auto mt-8 my w-full rounded shadow-md"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>
          {formik.touched.password && formik.errors.password ? (
            <div className="alert bg-red-400 text-white py-2 text-center my-2">
              <p>{formik.errors.password}</p>
            </div>
          ) : null}
          <button
            type="submit"
            className="w-full mt-5 py-3 bg-pink-700 text-white"
          >
            Registrarse
          </button>
          {mensaje ? (
            <p className="bg-red-500 py-3 px-4 text-white fixed top-0 left-0 ml-5 mt-5">{mensaje}</p>
          ) : null}
        </form>
      </div>
    </Layout>
  );
};

export default Registro;
