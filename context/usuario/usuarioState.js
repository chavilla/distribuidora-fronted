import React, { useReducer } from 'react';
import usuarioContext from './usuarioContext';
import usuarioReducer from './usuarioReducer';
import UsuarioContext from './usuarioContext';

const usuarioState=(props)=>{

    


    return(
        <UsuarioContext.Provider
        value={{

        }}
        >
            {props.children}
        </UsuarioContext.Provider>
    )
}

export default usuarioState;