import React, {useContext,useEffect} from "react";
import Link from 'next/link';
import UsuarioContext from '../../context/usuario/usuarioContext';
import { useRouter } from 'next/router';

const Header = () => {

    const router=useRouter();
    const { usuario, usuarioAutenticado, cerrarSesion }=useContext(UsuarioContext);
  
    useEffect(()=>{
      usuarioAutenticado();
    },[])
   
    return (
        <nav>
            <div className="nav-wrapper  light-blue accent-4">
                <div className="container" 
                >

                    <a href="#!" className="brand-logo">
                    Chaviweb
                    </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                    <li>
                        <Link href="/"><a>Inicio</a></Link>
                    </li>
                    <li>
                        <Link href="/tienda"><a>Tienda</a></Link>
                    </li>
                    <li>
                        <Link href="/registro"><a>Registro</a></Link>
                    </li>
                    {
                        usuario 
                        ?
                            <button className='logout'
                            type='button'
                            onClick={()=>cerrarSesion()}
                            >Cerrar sesión</button>
                        :
                        <li>
                            <Link href="/login"><a>Iniciar Sesión</a></Link>
                        </li>

                    }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
