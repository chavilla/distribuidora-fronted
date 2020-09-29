import React, { useContext, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { useFormik } from 'formik';
import UsuarioContext from '../context/usuario/usuarioContext';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import Spinner from '../components/layout/Spinner';
import { ThemeProvider, 
  Container, 
  Typography,
  Button, 
  Avatar, 
  CssBaseline,
  InputLabel,
  InputAdornment,
  Input
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockIcon from '@material-ui/icons/Lock';
import theme from '../components/themeConfig';
import { useStyles } from '../components/materialUiStyles/StylesMaterialUi';

const Login = () => {

  const router=useRouter();
  const { mensaje,autenticado,loginUsuario, loading }=useContext(UsuarioContext);

  useEffect(()=>{
    if(autenticado && !loading){
      router.push('/');
    }
  },[autenticado,loading]);

  const formik=useFormik({
      initialValues:{
        email: "",
        nombre: "",
        password: "",
      },

      validationSchema:Yup.object({
        email:Yup.string().required('El Email es campo requerido').email('El email no es válido'),
        password:Yup.string().required('La contraseña es campo requerido')
      }),

      onSubmit:(values)=>{
        loginUsuario(values);
      }
  });
    
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
            LOGIN
          </Typography>

          {loading 
            ? 
            <Spinner/>
            :
            <>
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
           
          ><Typography color='primary'>Ingresar</Typography></Button>
          {mensaje ? (<Typography color='error'>{mensaje}</Typography>):null}
            </>
        }
        </div>
        </Container>
        </div>
      </ThemeProvider>
      </Layout>
    );
}
 
export default Login;