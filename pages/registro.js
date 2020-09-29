import React, { useContext, useEffect } from "react";
import Layout from "../components/layout/Layout";
import UsuarioContext from "../context/usuario/usuarioContext";
import { useRouter } from 'next/router';
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Container,
  Typography,
  Button,
  ThemeProvider,
  Avatar, 
  CssBaseline,
  InputLabel,
  InputAdornment,
  Input
} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockIcon from '@material-ui/icons/Lock';
import FaceIcon from '@material-ui/icons/Face';
import { useStyles } from '../components/materialUiStyles/StylesMaterialUi';
import Spinner from "../components/layout/Spinner";
import theme from "../components/themeConfig";

const Registro = (props) => {
  //obtener el context
  const { mensaje, crearUsuario, loading, autenticado } = useContext(UsuarioContext);

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

  const router=useRouter();
  useEffect(()=>{
    if(autenticado && !loading){
      router.push('/');
    }
  },[autenticado,loading]);

  const classes=useStyles();

  return (
    <Layout>
    <ThemeProvider theme={theme}>
      <div className='containerFrmLogin'>
      <Container
        component='form'
        maxWidth='md'
        className='frmLogin'
        onSubmit={formik.handleSubmit}
      >
      <CssBaseline/>
      <div className={classes.paper}>
      <Avatar className='avatar'>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className='text-center title' component='h1' variant='h4'>
          REGISTRO
        </Typography>

        {loading 
          ? 
          <Spinner/>
          :
          <>
           <InputLabel htmlFor="input-with-icon-adornment">Name</InputLabel>
            <Input
              name='name'
              className='text-field'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <FaceIcon/>
                </InputAdornment>
              }
            />
            {formik.touched.name && formik.errors.name 
              ?
                <Typography color='error' variant='body1'>{formik.errors.name}</Typography>
              : null
            }
          <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
            <Input
              name='email'
              className='text-field'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
            {formik.touched.email && formik.errors.email 
              ?
                <Typography color='error' variant='body1'>{formik.errors.email}</Typography>
              : null
            }


          <InputLabel htmlFor="input-with-icon-adornment">password</InputLabel>
          <Input
            name='password'
            className='text-field'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
               <LockIcon/>
              </InputAdornment>
            }
          />

          {formik.touched.password && formik.errors.password 
            ?
              <Typography color='error' variant='body1'>{formik.errors.password}</Typography>
            : null
          }
         
        <Button type='submit'
         className='my'
         fullWidth
         variant='contained'
         color='secondary'
         
        ><Typography color='primary'>Enviar</Typography></Button>
        {mensaje ? (<Typography color='error'>{mensaje}</Typography>):null}
          </>
      }
      </div>
      </Container>
      </div>
    </ThemeProvider>
    </Layout>
  );
};

export default Registro;
