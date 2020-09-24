import React, { useContext, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { useFormik } from 'formik';
import UsuarioContext from '../context/usuario/usuarioContext';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import Spinner from '../components/layout/Spinner';
import { ThemeProvider, Container, Typography, Box, TextField, Button } from '@material-ui/core';
import theme from '../components/themeConfig';

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
      })
    
    return (
      <Layout>
      <ThemeProvider theme={theme}>
        <Container
          component='form'
          maxWidth='xs'
          onSubmit={formik.handleSubmit}
        >

          <Typography variant='h3' className='title'>
            Ingresa tus credenciales
          </Typography>

          {loading 
            ? 
            <Spinner/>
            :
            <>
            <Box>
            <TextField
            margin='dense'
            label='Email'
            variant='filled'
            fullWidth
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            >
            </TextField>
            {formik.touched.email && formik.errors.email 
              ?
              <Box>
                <Typography color='error' variant='body1'>{formik.errors.email}</Typography>
              </Box>
              : null
            }
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
            >
            </TextField>
            {formik.touched.password && formik.errors.password ? (
            <Box>
              <Typography color='error' variant='body1'>{formik.errors.password}</Typography>
            </Box>
          ) : null}
          </Box>
          <Button type='submit'
           className='my'
           variant='contained'
           color='primary'
           fullWidth
          ><Typography color='secondary'>Ingresar</Typography></Button>
          {mensaje ? (<Typography color='error'>{mensaje}</Typography>):null}
            </>
        }

        </Container>
      </ThemeProvider>
      </Layout>
    );
}
 
export default Login;