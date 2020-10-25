import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import UsuarioContext from "../../context/usuario/usuarioContext";

const Header = ({handleDrawerOpen}) => {
  
  //Zona de leer context
  const { usuario,logout, usuarioAutenticado, cerrarSesion } = useContext(
    UsuarioContext
  );

  //Zonas para leer los states
  const [admin,setAdmin]=useState(false);

  //Ejecutamos usuario autenticado cuando cargue la página
  useEffect(() => {
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
    <>
    <div id="overlay" className=""></div>
    <header className="site-header">
      <div className="container">
        <nav className="navbar">
          <div className="menu-zone">
                <button type="button" id="btnShowMenu"></button>
                <div className="menu-movil">
                  <img src="/static/img/menu_mini.png" alt="menu-img"/>
                </div>
          </div>
          <div className="c-logo">
            <img src="/static/img/logo.png" alt="logo"/>
          </div>
          <div className="main-menu ">
            <ul className="menu-list">
              <div>
                <button id="exitMenu" type="button"></button>
              </div>
              <a href="#">Inicio</a>
              <a href="#">Damas</a>
              <a href="#">Caballeros</a>
              <a href="#">Niños</a>
              <a href="#">Ofertas</a>
            </ul>
          </div>
          <div className="c-car">
           <img src="/static/img/carro.png" alt=""/>
          </div>
          <div className="c-user">
            <img src="/static/img/user.png" alt=""/>
          </div>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;
