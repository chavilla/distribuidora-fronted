import { LOGIN_USUARIO, 
        CREAR_USUARIO_ERROR, 
        CREAR_USUARIO, 
        OCULTAR_MENSAJE
} from '../../types';

export default(state,action)=>{
    switch(action.type){

        case CREAR_USUARIO_ERROR:
            return{
                ...state,
                mensaje:action.payload
            }
        
        case CREAR_USUARIO:
            return{
                ...state,
                mensaje:action.payload
            }
        
        case OCULTAR_MENSAJE:
            return{
                ...state,
                mensaje:null
            }

        case LOGIN_USUARIO:
            localStorage.setItem('token', action.payload);
            return{
                ...state,
                token: action.payload
            }
        default:
            return state;
    }
}