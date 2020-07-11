import React, { useState,createContext } from 'react';

const UsuarioContext=createContext(); 

const UsuarioProvider=props=>{


   const [state, setstate] = useState({})

    return(
        <UsuarioContext.Provider
        value={{
            state
        }}
        >
            {props.childen}
        </UsuarioContext.Provider>
    )
}

export default UsuarioContext;
