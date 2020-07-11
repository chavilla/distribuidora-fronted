import {OBTENER_PRODUCTOS} from '../../types/';

export default (state,action)=>{
    switch(action){
        case OBTENER_PRODUCTOS:
            return{
                ...state,
                productos:action.payload
            }
        default:{
            return state;
        }
    }
}