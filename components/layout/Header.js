import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import UsuarioContext from "../../context/usuario/usuarioContext";
import theme from '../themeConfig';
import { ThemeProvider, AppBar, Toolbar, IconButton, Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DehazeIcon from '@material-ui/icons/Dehaze';

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

  const useStyles=makeStyles(theme=>({
    offset: theme.mixins.toolbar,
    menuButton:{
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        }
    },
    ancho:{
        backgroundColor: "#fe4918 !important"
    },

    title:{
        flexGrow:1
    },

    btnText:{
        color: "#ffffff"
    },
    appBar:{
        [theme.breakpoints.up('sm')]:{
        width: `calc(100% - ${240}px)`,
        marginLeft: 240
        }
    },
    hide: {
        display: 'none',
      } 
  }));

  const classes=useStyles();

  return (
    <div>
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" 
            className={classes.menuButton}
            onClick={ handleDrawerOpen }
          >
            <DehazeIcon/>
          </IconButton>
          <Typography variant="h4" className={classes.title}>Chaviweb</Typography>
          {usuario ? (
             <Button variant="outlined" color="primary" className={classes.btnText}
             onClick={() => cerrarSesion()}
            >
              Cerrar Sesión
            </Button>
            ) : (
              <>
                <Link href="/registro">
                  <a className="">
                    Registro
                  </a>
                </Link>
                <Link href="/login">
                  <a className="">
                    Iniciar Sesión
                  </a>
                </Link>
              </>
            )}
          
        </Toolbar>
      </AppBar>
    </ThemeProvider>
    <Box className={classes.offset}></Box>
    </div>
  );
};

export default Header;
