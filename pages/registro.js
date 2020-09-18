import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import UsuarioContext from "../context/usuario/usuarioContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Typography, TextField, Box, Button, ThemeProvider } from "@material-ui/core";
import Theme from "../components/themeConfig";

const Registro = (props) => {
  //obtener el context
  const { mensaje, crearUsuario } = useContext(UsuarioContext);

  /** Formik para el el formulario   */
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es campo requerido"),
      email: Yup.string()
        .required("El Email es campo requerido")
        .email("El email no es válido"),
      password: Yup.string()
        .required("La contraseña es campo requerido")
        .min(8, "La contraseña debe tener mínimo 8 caracteres"),
    }),

    onSubmit: (values) => {
      crearUsuario(values);
    },
  });

  return (
    <Layout>
      <ThemeProvider theme={Theme}>
      <Container
        component='form'
        maxWidth='xs'
        onSubmit={formik.handleSubmit}
        >
          <Typography variant='h3' className='title'>
            Introduce tus datos
          </Typography>

          <Box
          >
          <TextField
            margin='dense'
            label='Email'
            variant='filled'
            fullWidth
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
            {formik.touched.email && formik.errors.email ? (
            <Box>
              <Typography color='error' variant='body1'>{formik.errors.email}</Typography>
            </Box>
          ) : null}
          </Box>

          <Box
          >
          <TextField
            margin='dense'
            label='Nombre'
            variant='filled'
            fullWidth
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
           {formik.touched.name && formik.errors.name ? (
            <div>
              <Typography color='error' variant='body1'>{formik.errors.name}</Typography>
            </div>
          ) : null}

          </Box>
        
          <Box>
          <TextField
            margin='dense'
            type="password"
            label='Contraseña'
            variant='filled'
            fullWidth
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
           {formik.touched.password && formik.errors.password ? (
            <div className="">
              <Typography color='error' variant='body1'>{formik.errors.password}</Typography>
            </div>
          ) : null}
          </Box>
         
          <Button
            type='submit'
            className='my'
            variant='contained'
            color='primary'
            fullWidth>
            <Typography color='secondary'>Registrarse</Typography>
          </Button>
          {mensaje ? (
            <p className="">{mensaje}</p>
          ) : null}
      </Container>
      </ThemeProvider>
    </Layout>
  );
};

export default Registro;
