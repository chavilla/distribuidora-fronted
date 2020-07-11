import React from "react";
import Link from 'next/link';

const Header = () => {
   
  return (
    <nav>
        <div className="nav-wrapper grey lighten-5">
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
                <li>
                    <Link href="/login"><a>Iniciar Sesión</a></Link>
                </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Header;
