// React components import
import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

//Context import
import CarritoProducto from "../components/CarritoProducto";
import CarritoContext from "../context/carrito/carritoContext";
import UsuarioContext from "../context/usuario/usuarioContext";

//import paypal button
import Paypal from "../components/PaypalCheckoutButton";

// Material ui components import
import { ThemeProvider, Typography } from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core/";
import { useStyles } from "../components/materialUiStyles/StylesMaterialUi";

//My components
import theme from "../components/themeConfig";
import Spinner from "../components/layout/Spinner";

const Carrito = () => {
  //---------------------Zona de state local----------------------------------------//
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [msj, setMsj] = useState(false);

  //---------------------Zona de leer el context-------------------------------------//
  const { usuario } = useContext(UsuarioContext);
  const {
    order,
    mensaje,
    productosCarrito,
    obtenerCarrito,
    loading,
  } = useContext(CarritoContext);

  //------------------------Zona de useEffect----------------------------------------//
  useEffect(() => {
    if (usuario) {
      obtenerCarrito(usuario.id);
    } else {
      obtenerCarrito();
    }
  }, [usuario]);

  useEffect(() => {
    if (mensaje) {
      setMsj(true);
    }
  }, [mensaje]);

  //-----------------Zona para llevar la orden a paypal-------------------------------//

  //sumamos los precios de los item
  let priceSum = order.reduce((total, ord) => total + ord.subtotal, 0);

  //definir order
  const ordered = {
    total: priceSum,
    items: order,
  };

  //use the styles
  const classes = useStyles();

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        {msj ? <Typography className="">{mensaje}</Typography> : null}
        <Typography variant="h3" className="title text-center" color="secondary">
          Carrito
        </Typography>
        {loading ? (
          <Spinner />
        ) : (
          <section className="">
            {productosCarrito.length === 0 ? (
              <>
                <Typography variant="h5">Tu carrito está vacío.</Typography>
                <Link href="/tienda">
                  <a className="link-back">Volver a la tienda</a>
                </Link>
              </>
            ) : (
              <TableContainer className={classes.tableContainer}>
              <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={3}>
                      Detalles
                    </TableCell>
                    <TableCell align="right">Precios</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell    className={classes.tableHeader}>Acción</TableCell>
                    <TableCell  className={classes.tableHeader}>Descripción</TableCell>
                    <TableCell  className={classes.tableHeader} align="center">Cantidad</TableCell>
                    <TableCell  className={classes.tableHeader} align="center">Precio Unitario</TableCell>
                    <TableCell  className={classes.tableHeader} align="center">Subtotal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productosCarrito.map((producto) => (
                    <CarritoProducto
                      setCount={setCount}
                      key={producto.idCar}
                      producto={producto}
                      setTotal={setTotal}
                      total={total}
                    />
                  ))}

                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={2}>Subtotal</TableCell>
                    <TableCell align="right">${priceSum}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tax</TableCell>
                  <TableCell align="left"></TableCell>
                    <TableCell align="right">0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}><Typography variant='h4'>TOTAL:</Typography></TableCell>
                  <TableCell align="right"><Typography variant='h4'>${priceSum}</Typography></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
                <div className="my">
                    {count < 1 ? null : <Paypal order={ordered} />}
                </div>
            </TableContainer>
            )}
          </section>
        )}
      </ThemeProvider>
    </Layout>
  );
};

export default Carrito;
