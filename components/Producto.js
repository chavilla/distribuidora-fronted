import React, { useContext } from "react";
import Productocontext from "../context/productos/productoContext";
import Usuariocontext from "../context/usuario/usuarioContext";
import Link from "next/link";
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';

const useStyles=makeStyles(theme=>({
  
}));

const Producto = ({ producto }) => {

  //----------------zona para extraer context----------------------------//
  const { errorAgregado,agregarProductoCarrito } = useContext(
    Productocontext
  );

  const { usuario }=useContext(Usuariocontext);

  //----------------Zona de ejecucion de funciones-----------------------//
  const añadirProducto = (productoId) => {
    agregarProductoCarrito(productoId, usuario.id);

  };

  //----------------Zona de useEffect------------------------------------//
  

  //----------------Zona para aplicar desctructuring a cada producto-----//
  const { name, price, image, car } = producto;

  return (
    
      <Grid 
        item
        xs={12}
        md={6}
        lg={3}
        className='text-center'
      >
        <div className="">
          <img
            className=""
            width='200px'
            height='200px'
            src={`${process.env.backend}/api/products/getImage/${image}`}
            alt={`Imagen ${name}`}
          ></img>
        </div>
        <div className="">
          <Typography variant='h5'>{name}</Typography>
          <Typography color='primary' variant='h4'>${price}</Typography>
        </div>
        { usuario 
        ?
        <div className="">
          { car!==0
          ?
          (<>
           
            <Button
            type="button"
            onClick={() => {
              añadirProducto(producto);
            }}
          >Añadir al carrito</Button>
          </>  
          ) 
          : 
            <Button
            onClick={() => {
              añadirProducto(producto);
            }}
          >Añadido al carrito</Button> 
          }
        </div>
        :
        <div className="">
          <Link href='/registro'>
            <Button  
              variant='contained'
              color='primary'
              className='text-white'
            >
              Registrate para comprar</Button>
          </Link>
        </div>
        }
      </Grid>
  );
};

export default Producto;
