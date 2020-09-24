import { LOGIN_EXITOSO,
        LOGIN_ERROR,
        REGISTRO_EXITOSO, 
        REGISTRO_ERROR,  
        OCULTAR_MENSAJE,
        USUARIO_AUTENTICADO,
        CERRAR_SESION, LOADING
} from '../../types';

export default(state,action)=>{
    switch(action.type){

        case REGISTRO_ERROR:
        case LOGIN_ERROR:
            return{
                ...state,
                mensaje:action.payload,
                loading:false
            }
        
        case OCULTAR_MENSAJE:
            return{
                ...state,
                mensaje:null
            }

        case LOADING:
            return{
                ...state,
                loading:action.payload
            }

        case LOGIN_EXITOSO:
        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload);
            return{
                ...state,
                token: action.payload,
                autenticado:true,
                mensaje:null,
                logout:null,
                loading:false
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
                ...state,
                logout:true,
                usuario:null,
                autenticado:null,
                token:null,
                mensaje:null
            }
        default:
            return state;
    }
}