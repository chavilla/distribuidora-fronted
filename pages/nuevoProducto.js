import React, { useContext, useState } from "react";
import Layout from "../components/layout/Layout";
import Dropzone from "../components/Dropzone";
import UsuarioContext from "../context/usuario/usuarioContext";
import ProductoContext from "../context/productos/productoContext";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

const NuevoProducto = () => {

//Zona de leer context o hooks
const { autenticado } = useContext(UsuarioContext);
const { imagen, guardarProducto }=useContext(ProductoContext);
const router=useRouter();

//formik para validacion del formulario
const formik = useFormik({
  initialValues: {
    name: "",
    price: "",
    stock: ""
  },

  validationSchema: Yup.object({
    name: Yup.string().required("El nombre es campo requerido"),
    price: Yup.number().min(1,"El precio debe ser mayor a 1").required("El precio es un campo requerido"),
    stock: Yup.number().min(1, "El stock debe ser mínimo 1").required("El stock es un campo requerido")
  }),

  onSubmit: (values,{resetForm}) => {
    guardarProducto(values);
    resetForm({values:''});
  },
});

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h3 className="text-center text-3xl md:text-5xl uppercase">
          Nuevo Producto
        </h3>
      </div>
      <div className="">
        <form className="bg-white w-11/12 mx-auto py-6 px-5 mb-12 sm:w-9/12 md:w-1/2 lg:w-1/3 lg:mx-auto lg:py-16 lg:px-8 lg:mb-32" onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <div className='field'>
              <input
                placeholder="Escribe el Nombre"
                type="text"
                className="border py-2 px-3 mx-auto mt-8 my w-full rounded shadow-md"
                name="name"
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
                placeholder="Pon el Precio Aquí"
                type="number"
                className="border py-2 px-3 mx-auto mt-8 my w-full rounded shadow-md"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
               {formik.touched.price && formik.errors.price ? (
                  <div className="alert bg-red-400 text-white py-2 text-center my-2">
                    <p>{formik.errors.price}</p>
                  </div>
                ) : null}
            </div>
            <div className="field">
              <input
                type="number"
                placeholder="Stock Inicial"
                className="border py-2 px-3 mx-auto mt-8 my w-full rounded shadow-md"
                name="stock"
                value={formik.values.stock}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              ></input>
              {formik.touched.stock && formik.errors.stock ? (
                  <div className="alert bg-red-400 text-white py-2 text-center my-2">
                    <p>{formik.errors.stock}</p>
                  </div>
                ) : null}
            </div>
            <div className="field mt-8">
                <Dropzone/>
            </div>
           {/*  <input
                type="file"
                placeholder="Subir Imagen"
                className="border-4 border-dashed border-gray-400 appearance-none py-2 px-3 mx-auto mt-8 my w-full rounded shadow-md"
                name="file"
                type="file"
                onChange={e=>establecerImagen(e.target.files)}
              ></input> */}
          
            <button
                type="submit"
                className="w-full mt-10 py-3 bg-orange-500 text-white"
                disabled={imagen ? false:true}
              >
                Crear Producto
              </button>
        </form>
      </div>
    </Layout>
  );
};

export default NuevoProducto;
