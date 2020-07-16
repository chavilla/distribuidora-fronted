import React, { useReducer } from 'react';
import usuarioReducer from './usuarioReducer';
import UsuarioContext from './usuarioContext';
import clienteAxios from '../../config/axios';
import { 
    LOGIN_USUARIO, 
    CREAR_USUARIO, 
    CREAR_USUARIO_ERROR,
    OCULTAR_MENSAJE
} from '../../types';

const usuarioState=(props)=>{

    const initialState={
        usuario:null,
        autenticado:null,
        token: null,
        mensaje:null
    }

    const [state,dispatch]=useReducer(usuarioReducer,initialState);

    //Crea un usuario
    const crearUsuario=async (usuario)=>{

        try {
            const respuesta=await clienteAxios.post('/api/users',usuario);
            
            if(respuesta.data.error){
                dispatch({
                    type:CREAR_USUARIO_ERROR,
                    payload:respuesta.data.error
                });

                setTimeout(()=>{
                    ocultarMensaje();
                },3000)
              
            }
            if(respuesta.data.success){
                dispatch({
                    type:CREAR_USUARIO,
                    payload:respuesta.data.success
                })
                setTimeout(()=>{
                    ocultarMensaje();
                },3000)
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type:CREAR_USUARIO_ERROR
            })
        }
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
                type: LOGIN_USUARIO,
                payload: respuesta.data
            })
        } catch (error) {
            
        }
    }

    return(
        <UsuarioContext.Provider
        value={{
            mensaje:state.mensaje,
            usuario:state.usuario,
            autenticado:state.autenticado,
            crearUsuario,
            loginUsuario
        }}
        >
            {props.children}
        </UsuarioContext.Provider>
    )
}

export default usuarioState;