import React, { useContext, useEffect } from "react";
import Link from "next/link";
import UsuarioContext from "../../context/usuario/usuarioContext";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { usuario, usuarioAutenticado, cerrarSesion } = useContext(
    UsuarioContext
  );

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <nav className="flex items-center bg-orange-500 justify-between flex-wrap lg:pr-5 p-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
         <Link href='/'>
            <a className="text-2xl text-white">
              <img className='ml-12 w-16 h-16' src='static/img/logo.png' alt='Logo'></img>  
            </a>
         </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
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
      <div className="w-full block flex-grow lg:flex lg:justify-end lg:items-center lg:w-auto ">
        <div className="text-sm">
            <Link href="/">
            <a
            className="block text-white text-center mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4 px-5"
          >
              Inicio
          </a>
            </Link>
            <Link href="/tienda">
            <a
            className="block text-white text-center mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4 px-5"
          >
              Tienda
          </a>
            </Link>
            { usuario ?
         <button type='button' className='text-white'
         onClick={()=>cerrarSesion()}
         >Cerrar Sesión</button>
          :
             <>
             <Link href="/registro">
               <a
               className="block text-white text-center mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4 px-5">
                 Registro
               </a>
               </Link>
               <Link href="/login">
                   <a
                   className="block text-white sm:text-white text-center mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 px-5"
                   >
                   Iniciar Sesión
                   </a>
               </Link>
             </>
          }
            
        </div>
       
      </div>
    </nav>
  );
};

export default Header;
