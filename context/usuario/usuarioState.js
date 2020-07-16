import React, { useReducer } from 'react';
import usuarioReducer from './usuarioReducer';
import UsuarioContext from './usuarioContext';
import clienteAxios from '../../config/axios';
import { LOGIN_USUARIO } from '../../types';

const usuarioState=(props)=>{

    const initialState={
        usuario:null,
        autenticado:null,
        token: null
    }

    const [state,action]=useReducer(usuarioReducer,initialState);

    const login_usuario=async (usuario)=>{
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
            usuario:state.usuario,
            autenticado:state.autenticado,
            login_usuario
        }}
        >
            {props.children}
        </UsuarioContext.Provider>
    )
}

export default usuarioState;