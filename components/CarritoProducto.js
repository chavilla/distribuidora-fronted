import React, { useContext, useState, useEffect } from "react";
import CarritoContext from "../context/carrito/carritoContext";
import UsuarioContext from "../context/usuario/usuarioContext";
import { TextField, Typography, Button, ThemeProvider } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from '@material-ui/icons/Delete';
import theme from "./themeConfig";

const CarritoProducto = ({ producto, setCount, total, setTotal }) => {

  //Zona de leer el context
  const { updateOrder, deleteProductOfCar } = useContext(CarritoContext);
  const { usuario } = useContext(UsuarioContext);

  //Extraer las propiedades del producto
  const { productId, name, price, image } = producto;

  // local para el subtotal
  const [cantidad, setCantidad] = useState(1);
  const [subtotal, setSubtotal] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (cantidad && price) {
      setSubtotal(cantidad * price);
      setTotal(subtotal);
    }

    if (cantidad < 1) {
      setError(true);
    } else {
      setError(false);
      if (usuario) {
        updateOrder(productId, name, cantidad, cantidad * price, usuario.id);
      }
    }

    setCount(cantidad);
  }, [cantidad, producto, usuario]);

  const setIdCar=(id)=>{
    console.log(id);
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <TableRow key={producto.id}>
        <TableCell>
          <Button
          variant="contained"
          className='btn-delete'
          startIcon={<DeleteIcon />}
          onClick={e=>deleteProductOfCar(producto.idCar, producto.productId)}
          >
            Delete
          </Button>
        </TableCell>
        <TableCell><Typography variant='h6'>{producto.name}</Typography></TableCell>
        <TableCell align='center'>
          <TextField
            type="number"
            min="1"
            className="mx text-center input-count"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </TableCell>
        <TableCell align='right'><Typography variant="body1" >${producto.price}</Typography></TableCell>
        <TableCell align='right'><Typography>{subtotal}</Typography></TableCell>
      </TableRow>
      {error ? (
        <p className="alert-danger">La cantidad debe ser igual o mayor a 1</p>
      ) : null}
      </ThemeProvider>
    </>
  );
};

export default CarritoProducto;
