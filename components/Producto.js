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
  const { id, name, price, image, car } = producto;

  return (
      <Grid 
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        spacing={2}
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
          <p className="">${price}</p>
        </div>
        { usuario 
        ?
        <div className="">
          { car!==0
          ?
          (<>
           
            <button
            className=""
            type="button"
            onClick={() => {
              añadirProducto(producto);
            }}
          >Añadir al carrito</button>

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
            >
              Registrate para comprar</Button>
          </Link>
        </div>
        }
       
      </Grid>

  );
};

export default Producto;
