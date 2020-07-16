import { LOGIN_USUARIO } from '../../types';

export default(state,action)=>{
    switch(action){

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