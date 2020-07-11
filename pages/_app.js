import App from 'next/app';
import { Component } from 'react';
import UsuarioContext from '../context/usuarioContext';

const MyApp = (props) => {

    const { Component, pageProps }=props;

    return ( 
        <UsuarioContext.Provider>
            <Component {...pageProps} />
        </UsuarioContext.Provider>
     );
}
 
export default MyApp;