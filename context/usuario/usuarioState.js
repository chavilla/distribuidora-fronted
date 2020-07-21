import React, { useReducer } from 'react';
import usuarioReducer from './usuarioReducer';
import UsuarioContext from './usuarioContext';
import clienteAxios from '../../config/axios';
import { 
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    REGISTRO_EXITOSO, 
    REGISTRO_ERROR,
    OCULTAR_MENSAJE,
    USUARIO_AUTENTICADO,
    CERRAR_SESION
} from '../../types';
import tokenAuth from '../../config/token';

const usuarioState=(props)=>{

    const initialState={
        usuario:null,
        autenticado:null,
        token: typeof window !== 'undefined' ? localStorage.getItem('token'): '',
        mensaje:null
    }

    const [state,dispatch]=useReducer(usuarioReducer,initialState);

    //Crea un usuario
    const crearUsuario=async (usuario)=>{
        try {
            const respuesta=await clienteAxios.post('/api/users',usuario);
                dispatch({
                    type:REGISTRO_EXITOSO,
                    payload:respuesta.data.msg
                });
        } catch (error) {
            console.log(error);
            dispatch({
                type:REGISTRO_ERROR,
                payload: error.response.data.msg 
            })
        }
        setTimeout(()=>{
            ocultarMensaje()
        },3000)
    }

    const ocultarMensaje=()=>{
        dispatch({
            type: OCULTAR_MENSAJE
        })
    }

    const loginUsuario=async (usuario)=>{
        try {
            const respuesta=await clienteAxios.post('/api/auth',usuario);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data.token
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload:error.response.data.msg
            })
        }
    }

    const usuarioAutenticado=async ()=>{
        const token=localStorage.getItem('token');
        if(token){
            tokenAuth(token);
        }

        try {
            const respuesta=await clienteAxios.get('api/auth');
            dispatch({
                type: USUARIO_AUTENTICADO,
                payload:respuesta.data.user
            }) 
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload:error.response.data.msg
            })
        }
    }

    const cerrarSesion=()=>{
        dispatch({
            type:CERRAR_SESION
        })
    }

    return(
        <UsuarioContext.Provider
        value={{
            mensaje:state.mensaje,
            usuario:state.usuario,
            autenticado:state.autenticado,
            token:state.token,
            crearUsuario,
            loginUsuario,
            usuarioAutenticado,
            cerrarSesion
        }}
        >
            {props.children}
        </UsuarioContext.Provider>
    )
}

export default usuarioState;