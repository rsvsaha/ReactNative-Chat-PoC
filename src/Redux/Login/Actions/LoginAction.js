import { LoginActionTypes } from "../ActionTypes/LoginActionTypes"

export const LoginAction = (userName) =>{

    return {
        type:LoginActionTypes.LOGIN_SUCCESSFUL,
        payload:{
            userName:userName
        }
    }
}