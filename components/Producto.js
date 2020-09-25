import React, { useContext } from "react";
import Productocontext from "../context/productos/productoContext";
import Usuariocontext from "../context/usuario/usuarioContext";
import Link from "next/link";
import { Grid, Typography, Button, ThemeProvider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import theme from "./themeConfig";
import { useStyles } from "./materialUiStyles/StylesMaterialUi";

const Producto = ({ producto }) => {
  //----------------zona para extraer context----------------------------//
  const {  agregarProductoCarrito } = useContext(Productocontext);

  const { usuario } = useContext(Usuariocontext);

  //----------------Zona de ejecucion de funciones-----------------------//
  const añadirProducto = (productoId) => {
    agregarProductoCarrito(productoId, usuario.id);
  };

  //----------------Zona para aplicar desctructuring a cada producto-----//
  const { name, price, image, car } = producto;

  const classes=useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} md={6} lg={3} className="text-center card">
        <Card className={classes.mx}>
          <CardActionArea>
          <div className='container-image'>
            <img
            className='imgProduct'
            src={`${process.env.backend}/api/products/getImage/${image}`}
            alt={`imagen ${image}`}
            />
          </div>
          <CardContent>
              <Typography variant="h5">{name}</Typography>
              <Typography variant="h4">${price}</Typography>
          </CardContent>

          <CardActions>
          {usuario ? (
                <>
                  {car !== 0 ? (
                    <Button
                      type="button"
                      variant="contained"
                      className={classes.btnProduct}
                      color="primary"
                      onClick={() => {
                        añadirProducto(producto);
                      }}
                    >
                      <Typography color="secondary">
                        Añadir al carrito
                      </Typography>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        añadirProducto(producto);
                      }}
                    >
                      Añadido al carrito
                    </Button>
                  )}
                </>
              ) : (
                  <Link href="/registro">
                    <Button
                      variant="contained"
                      color="primary"
                      className="text-white"
                    >
                      Registrate para comprar
                    </Button>
                  </Link>
                
              )}
          </CardActions>
          </CardActionArea>
        </Card>
      </Grid>
    </ThemeProvider>
  );
};

export default Producto;
