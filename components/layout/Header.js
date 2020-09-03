import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import UsuarioContext from "../../context/usuario/usuarioContext";
import { toggle } from "./toggle";

const Header = () => {
  
  //Zona de leer context
  const { usuario,logout, usuarioAutenticado, cerrarSesion } = useContext(
    UsuarioContext
  );

  //Zonas para leer los states
  const [admin,setAdmin]=useState(false);
  const [activeMenu,setActiveMenu]=useState(false);

  //Ejecutamos usuario autenticado cuando cargue la página
  useEffect(() => {
    toggle();
    if(!logout){
      usuarioAutenticado(); 
    }
  }, []);

  useEffect(()=>{
    if (usuario) {
      if (usuario.role==='admin') {
        setAdmin(true);
      } 
    }
      else{
        setAdmin(false);
      }
  },[usuario]);


  return (
    <div className="bg-orange-500">
      <nav className="flex container mx-auto items-center justify-between flex-wrap py-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <a className="text-2xl text-white">
              <img
                className="w-16 h-16"
                src="static/img/logo.png"
                alt="Logo"
              ></img>
            </a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" id="btnToggle" onClick={e=>setActiveMenu(!activeMenu)}>
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
       
        <div className="w-full block flex-grow lg:flex lg:justify-end lg:items-center lg:w-auto hidden" id="submenu">
          <div className="text-sm">
            <Link href="/">
              <a className="block text-white text-center mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4 px-5">
                Inicio
              </a>
            </Link>
            <Link href="/tienda">
              <a className="block text-white text-center mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 px-5">
                Tienda
              </a>
            </Link>
            { admin 
            ?
            <Link href='/nuevoProducto'>
              <a className='block text-white text-center mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 px-5'>
                Nuevo Producto
              </a>
            </Link> 
            : 
            null
            }
            <Link href="/carrito">
              <a className="block text-white text-center mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 px-5">
                Carrito
              </a>
            </Link>
            {usuario ? (
              <button
                type="button"
                className="text-white font-bold text-center px-5"
                onClick={() => cerrarSesion()}
              >
                Cerrar Sesión
              </button>
            ) : (
              <>
                <Link href="/registro">
                  <a className="block text-white text-center mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 px-5">
                    Registro
                  </a>
                </Link>
                <Link href="/login">
                  <a className="block text-white sm:text-white text-center mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 px-5">
                    Iniciar Sesión
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
