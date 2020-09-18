import React, { useContext, useState, useEffect } from "react";
import CarritoContext from "../context/carrito/carritoContext";
import UsuarioContext from "../context/usuario/usuarioContext";
import { Grid, Typography, TextField, Tooltip } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Spinner from "./layout/Spinner";

const CarritoProducto = ({ producto, setCount }) => {
 
  //Zona de leer el context
  const { updateOrder, deleteProductOfCar }=useContext(CarritoContext);
  const { usuario }=useContext(UsuarioContext);

  //Extraer las propiedades del producto y luego del usuario
  const { productId,name, price, image } = producto;

  // local para el subtotal
  const [cantidad, setCantidad]=useState(1);
  const [subtotal,setSubtotal]=useState('');
  const [error, setError]=useState(false);

  useEffect(()=>{

    if(cantidad && price){
      setSubtotal(cantidad*price);
    }

    if (cantidad<1) {
      setError(true);
    }else{
      setError(false);
      if (usuario) {
        updateOrder(productId,name,cantidad,cantidad*price,usuario.id); 
      }
    }

    setCount(cantidad);

  },[cantidad,producto,usuario]);

  return (
    <>
    <div className='flex-grow'>
      <Grid container spacing={1} alignItems='center'>
        <Grid container item xs={12} md={3} lg={3}>
          <img
            className='m-auto'
            width='70'
            height='70'
            src={`${process.env.backend}/api/products/getImage/${image}`}
            alt={`Imagen ${name}`}/>
            <Tooltip title='Eliminar' placement='top-start'>
              <IconButton aria-label='Eliminar'>
                  <DeleteIcon />
              </IconButton>
            </Tooltip>
        </Grid>
        <Grid item xs={12} md={2} lg={2} className='d-flex'>
          <Typography variant='h6' align='center'>{name}</Typography>
        </Grid>

        <Grid item xs={12} md={2} lg={2} className='d-flex'>
          <Typography variant='h6' className='mx' align='left'>Precio: </Typography>
          <Typography variant='h5' className='mx' align='left' color='primary'>
            ${price}
          </Typography>
        </Grid>

        <Grid item xs={12} md={2} lg={2} className='d-flex justify-center'>
          <Typography variant='h6' className='mx'>Cantidad</Typography>
          <TextField
            type='number'
            min='1'
            className='mx w-25 text-center'
            value={cantidad}
            onChange={e=>setCantidad(Number(e.target.value))}
          />
        </Grid>

        <Grid item xs={12} md={3} lg={3} className='d-flex'>
          <Typography className='mx' variant='h6'>Subtotal</Typography>
          <Typography className='mx' variant='h5' color='primary'>
          ${subtotal}
          </Typography>
        </Grid>
      </Grid>
    </div>
    {error ? <p className=''>La cantidad debe ser igual o mayor a 1</p> :null}
    </>
  );
};

export default CarritoProducto;
