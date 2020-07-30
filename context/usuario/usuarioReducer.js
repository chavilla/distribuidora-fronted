import { LOGIN_EXITOSO,
        LOGIN_ERROR,
        REGISTRO_EXITOSO, 
        REGISTRO_ERROR,  
        OCULTAR_MENSAJE,
        USUARIO_AUTENTICADO,
        CERRAR_SESION
} from '../../types';

export default(state,action)=>{
    switch(action.type){

        case REGISTRO_ERROR:
        case REGISTRO_EXITOSO:
        case LOGIN_ERROR:
            return{
                ...state,
                mensaje:action.payload
            }
        
        case OCULTAR_MENSAJE:
            return{
                ...state,
                mensaje:null
            }

        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload);
            return{
                ...state,
                token: action.payload,
                autenticado:true,
                mensaje:null
            }
        case USUARIO_AUTENTICADO:
            return{
                ...state,
                autenticado:true,
                usuario:action.payload,
            }
        case CERRAR_SESION:
            localStorage.removeItem('token');
            return{
                usuario:null,
                autenticado:null,
                token:null,
                mensaje:null
            }
        default:
            return state;
    }
}