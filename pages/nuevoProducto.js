import React, { useEffect, useContext } from "react";
import Layout from "../components/layout/Layout";
import UsuarioContext from "../context/usuario/usuarioContext";
import { useRouter } from "next/router";

const NuevoProducto = () => {

//Zona de leer context o hooks
const { autenticado } = useContext(UsuarioContext);
const router=useRouter();


  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h3 className="text-center text-3xl md:text-5xl uppercase">
          Nuevo Producto
        </h3>
      </div>
      <div className="">
        <form className="bg-white w-11/12 mx-auto py-6 px-5 mb-12 sm:w-9/12 md:w-1/2 lg:w-1/3 lg:mx-auto lg:py-16 lg:px-8 lg:mb-32">
            <div className=''>
            <input
            placeholder="Email"
            type="text"
            className="border py-2 px-3 mx-auto mt-8 my w-full rounded shadow-md"
            name="email"
          ></input>

          <input
            type="password"
            placeholder="Password"
            className="border py-2 px-3 mx-auto mt-8 my w-full rounded shadow-md"
            name="password"
          ></input>

          <button
            type="submit"
            className="w-full mt-10 py-3 bg-orange-500 text-white"
          >
            Iniciar Sesión
          </button>
            </div>
        </form>
      </div>
    </Layout>
  );
};

export default NuevoProducto;
