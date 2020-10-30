import React, { useContext } from "react";
import Productocontext from "../context/productos/productoContext";
import Usuariocontext from "../context/usuario/usuarioContext";
import Link from "next/link";


const Producto = ({ producto }) => {
  //----------------zona para extraer context----------------------------//
  /* const {  agregarProductoCarrito } = useContext(Productocontext);

  const { usuario } = useContext(Usuariocontext); */

  //----------------Zona de ejecucion de funciones-----------------------//
 /*  const añadirProducto = (productoId) => {
    agregarProductoCarrito(productoId, usuario.id);
  }; */

  //----------------Zona para aplicar desctructuring a cada producto-----//
  //const { name, price, image, car } = producto;


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
              <Typography variant="h4" color='secondary'>${price}</Typography>
          </CardContent>

          <CardActions>
          {usuario ? (
                <>
                  {car !== 0 ? (
                    <Button
                      type="button"
                      variant="contained"
                      fullWidth
                      color="secondary"
                      onClick={() => {
                        añadirProducto(producto);
                      }}
                    >
                      <Typography color='primary'>
                        Añadir al carrito
                      </Typography>
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="contained"
                      fullWidth
                      color="secondary"
                      onClick={() => {
                        añadirProducto(producto);
                      }}
                    >
                      Añadido al carrito
                    </Button>
                  )}
                </>
              ) : (
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      className="text-white"
                    >
                      Ver más
                    </Button>
              )}
          </CardActions>
          </CardActionArea>
        </Card>
      </Grid>
    </ThemeProvider>
  );
};

export default Producto;
