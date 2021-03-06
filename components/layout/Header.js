import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import UsuarioContext from "../../context/usuario/usuarioContext";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SettingsPowerIcon from '@material-ui/icons/SettingsPower';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ThemeProvider} from '@material-ui/core/styles';
import theme from '../themeConfig'

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: '100%',
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title:{
    flexGrow:1
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  //const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  /** Fin de zona Material ui */

  //Zona de leer context
  const { usuario,logout, usuarioAutenticado, cerrarSesion } = useContext(
    UsuarioContext
  );

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

    <ThemeProvider theme={theme}>
      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color='primary'
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className='container'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Link href='/index'>
            <a className='title'>
            <Typography variant="h6" color='secondary'>Chavicode</Typography>
            </a>
          </Link>
          { !usuario ?
            <Link href="/login">
            <a><Typography variant="h6" color='secondary'>Login</Typography></a>
          </Link>
          :
          <button
                type="button"
                className="btn-logout"
                onClick={() => cerrarSesion()}
              >
                <SettingsPowerIcon/>
              </button>
          }
        </Toolbar>
        <div className={classes.toolbar}></div>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Link href='/index'>
            <a>Chavicode</a>
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button>
              <Link href='/index'>
              <a className='item-menu'>
              <ListItemIcon><HomeIcon/></ListItemIcon>
              <ListItemText/>
              <Typography variant='button'>Inicio</Typography>
              </a>
              </Link>
            </ListItem>
            <ListItem button>
              <Link href='/carrito'>
              <a className='item-menu'>
              <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
              <ListItemText/>
              <Typography variant='button'>Carrito</Typography>
              </a>
              </Link>
            </ListItem>
        </List>
      </Drawer>
      <div className={theme.mixins.toolbar}></div>
    </div>
    </ThemeProvider>
  );
}