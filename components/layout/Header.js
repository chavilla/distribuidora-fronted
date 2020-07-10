import React from "react";

const Header = () => {
   
  return (
    <nav>
        <div className="nav-wrapper grey lighten-5">
            <div className="container">
                <a href="#!" className="brand-logo">
                Chaviweb
                </a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Tienda</a>
                </li>
                <li>
                    <a href="#">Registro</a>
                </li>
                <li>
                    <a href="#">Iniciar Sesión</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Header;
